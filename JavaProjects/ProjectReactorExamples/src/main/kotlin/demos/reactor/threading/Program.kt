package demos.reactor.threading

import reactor.core.publisher.Flux
import reactor.core.publisher.Mono
import reactor.core.scheduler.Schedulers
import java.text.DecimalFormat
import java.util.concurrent.ExecutorService
import java.util.concurrent.Executors
import java.util.concurrent.TimeUnit

fun main(args: Array<String>) {
    val pool1 = Executors.newFixedThreadPool(2)
    val pool2 = Executors.newFixedThreadPool(2)

    runUI(arrayOf(pool1, pool2))
}

private fun runUI(pools: Array<ExecutorService>) {
    fun printMenu() = println("""
        --- Demos of Threading and Flux ---
        1) Async Publisher
        2) Async Subscriber
        3) Async Publisher and Subscriber
        4) Async and the Flatmap operation
        5) Parallel Flux
        6) Exit
""".replaceIndent())

    fun tidyUp() {
        println("Shutting down thread pools")
        pools.forEach {
            it.shutdown()
            it.awaitTermination(10, TimeUnit.SECONDS)
        }
        println("Bye...")
    }

    fun runLoop() {
        loop@ while (true) {
            when (readLine()?.toInt() ?: 6) {
                1 -> showAsyncPublisher(pools[0])
                2 -> showAsyncSubscriber(pools[0])
                3 -> showAsyncPublisherAndSubscriber(pools[0], pools[1])
                4 -> showAsyncFlatMap(pools[0])
                5 -> showParallelFlux(pools[0])
                6 -> break@loop
            }
        }
    }

    printMenu()
    runLoop()
    tidyUp()
}

fun threadId() = Thread.currentThread().id
fun printTabbed(str: String) = println("\t$str")
fun genValue(): String {
    val df = DecimalFormat("00.00")
    return df.format(Math.random() * 100)
}

fun showAsyncPublisher(pool: ExecutorService) {
    println("--- Flux With Async Publisher ---")
    Mono.fromCallable(::genValue)
            .repeat(100)
            .doOnNext { printTabbed("$it generated on ${threadId()}") }
            .publishOn(Schedulers.fromExecutor(pool))
            .doOnNext { printTabbed("$it moved to ${threadId()}") }
            .subscribe { printTabbed("$it received on ${threadId()}") }

}

fun showAsyncSubscriber(pool: ExecutorService) {
    println("--- Flux With Async Subscriber ---")
    val flux = Mono.fromCallable(::genValue)
            .repeat(10)
            .doOnNext { printTabbed("$it generated on ${threadId()}") }
            .subscribeOn(Schedulers.fromExecutor(pool))
            .doOnNext { printTabbed("$it still on ${threadId()}") }

    flux.subscribe { printTabbed("$it received by S1 on ${threadId()}") }
    flux.subscribe { printTabbed("$it received by S2 on ${threadId()}") }
}

fun showAsyncPublisherAndSubscriber(pool1: ExecutorService, pool2: ExecutorService) {
    println("--- Flux With Async Publisher And Subscriber ---")
    val flux = Mono.fromCallable(::genValue)
            .repeat(10)
            .doOnNext { printTabbed("$it generated on ${threadId()}") }
            .subscribeOn(Schedulers.fromExecutor(pool1))
            .publishOn(Schedulers.fromExecutor(pool2))
            .doOnNext { printTabbed("$it now on ${threadId()}") }

    flux.subscribe { printTabbed("$it received by S1 on ${threadId()}") }
    flux.subscribe { printTabbed("$it received by S2 on ${threadId()}") }
}

fun showAsyncFlatMap(pool: ExecutorService) {
    println("--- Async with FlatMap ---")
    Flux.fromArray(arrayOf("A", "B"))
            .flatMap { str ->
                Flux.range(1, 10)
                        .map { "$str$it" }
                        .subscribeOn(Schedulers.fromExecutor(pool))
            }
            .subscribe { printTabbed("$it received on ${threadId()}") }
}

fun showParallelFlux(pool: ExecutorService) {
    println("--- Parallel Flux ---")
    Mono.fromCallable(::genValue)
            .repeat(10)
            .parallel()
            .runOn(Schedulers.fromExecutor(pool))
            .subscribe { printTabbed("$it received by subscriber on ${threadId()}") }
}