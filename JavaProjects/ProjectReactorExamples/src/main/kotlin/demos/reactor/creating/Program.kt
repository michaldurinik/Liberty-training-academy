package demos.reactor.creating

import reactor.core.publisher.Flux
import reactor.core.publisher.Mono
import reactor.core.scheduler.Schedulers
import java.text.DecimalFormat
import java.time.Duration

fun main(args: Array<String>) {
    println("--- Demos of Creating Flux ---")
    showEmptyFlux()
    showFluxViaJust()
    showFluxViaIterable()
    showFluxViaArray()
    showFluxViaRange()
    showFluxViaInterval()
    showFluxViaMerge()
    showFluxViaZip()
    showFluxViaGenerate()
    showFluxViaCreate()
    showFluxWithAsyncPublisher()
    showFluxWithAsyncSubscriber()
}

fun showEmptyFlux() {
    println("--- Empty Flux ---")
    Flux.empty<String>()
            .subscribe(
                    { str -> println("\tReceived $str") },
                    { error -> println("\tError occurred ($error.message)") },
                    { println("\tAll done") })
}

fun showFluxViaJust() {
    println("--- Flux built via 'just' ---")
    Flux.just("abc", "def", "ghi", "jkl", "mno")
            .subscribe(
                    { str -> println("\tReceived $str") },
                    { error -> println("\tError occurred ($error.message)") },
                    { println("\tAll done") })
}

fun showFluxViaIterable() {
    val data = listOf("abc", "def", "ghi", "jkl", "mno")
    println("--- Flux built via iterable ---")
    Flux.fromIterable(data)
            .subscribe(
                    { str -> println("\tReceived $str") },
                    { error -> println("\tError occurred ($error.message)") },
                    { println("\tAll done") })
}

fun showFluxViaArray() {
    val data = arrayOf("abc", "def", "ghi", "jkl", "mno")
    println("--- Flux built via array ---")
    Flux.fromArray(data)
            .subscribe(
                    { str -> println("\tReceived $str") },
                    { error -> println("\tError occurred ($error.message)") },
                    { println("\tAll done") })
}

fun showFluxViaRange() {
    println("--- Flux built from range ---")
    Flux.range(1,10)
            .subscribe(
                    { item -> println("\tReceived $item") },
                    { error -> println("\tError occurred ($error.message)") },
                    { println("\tAll done") })
}

fun showFluxViaInterval() {
    println("--- Flux built from interval ---")
    val flux = Flux.interval(Duration.ofSeconds(1))
            .take(10)
            .subscribe(
                    { item -> println("\tReceived $item") },
                    { error -> println("\tError occurred ($error.message)") },
                    { println("\tAll done") })

    //Polling for the sake of the demo
    while (!flux.isDisposed) {
        println("\tWaiting for interval...")
        Thread.sleep(500)
    }
}

fun showFluxViaMerge() {
    val data1 = listOf("abc", "def", "ghi", "jkl", "mno")
    val data2 = arrayOf("pqr", "stu", "vwx", "yza")

    println("--- Flux built via merging ---")
    Flux.fromIterable(data1)
            .mergeWith(Flux.fromArray(data2))
            .subscribe(
                    { str -> println("\tReceived $str") },
                    { error -> println("\tError occurred ($error.message)") },
                    { println("\tAll done") })
}

fun showFluxViaZip() {
    val simpsons = listOf("Marge", "Homer", "Bart", "Liza", "Snowball")
    val flintstones = listOf("Wilma", "Fred", "Barney", "Betty", "Dino")

    println("--- Flux built via zipping ---")
    Flux.fromIterable(simpsons)
            .zipWith(Flux.fromIterable(flintstones))
            .subscribe(
                    { tuple2 -> println("\tReceived ${tuple2.t1} and ${tuple2.t2} ") },
                    { error -> println("\tError occurred ($error.message)") },
                    { println("\tAll done") })
}

fun showFluxViaGenerate() {
    val data = listOf("abc", "def", "ghi", "jkl", "mno")
    println("--- Flux built via 'generate' ---")
    Flux.generate<String, Int>(
            { 0 },
            { state, sink ->
                if (state < data.size) {
                    sink.next(data[state])
                } else {
                    sink.complete()
                }
                state + 1
            })
            .subscribe(
                    { str -> println("\tReceived $str") },
                    { error -> println("\tError occurred ($error.message)") },
                    { println("\tAll done") })
}

fun showFluxViaCreate() {
    val data = listOf("abc", "def", "ghi", "jkl", "mno")
    println("--- Flux built via 'create' ---")
    Flux.create<String> { sink ->
        for (str in data) {
            sink.next(str)
        }
        sink.complete()
    }.subscribe(
            { str -> println("\tReceived $str") },
            { error -> println("\tError occurred ($error.message)") },
            { println("\tAll done") })
}

fun showFluxWithAsyncPublisher() {
    val df = DecimalFormat(".00")

    println("--- Flux built via async publisher ---")
    val flux = Mono.fromCallable { df.format(Math.random() * 100) }
            .publishOn(Schedulers.parallel())
            .repeat(10)
            .subscribeOn(Schedulers.parallel())
            .doOnNext { str -> println("\t$str being processed on ${Thread.currentThread().id}") }
            .subscribe(
                    { str -> println("\tReceived $str") },
                    { error -> println("\tError occurred ($error.message)") },
                    { println("\tAll done") })

    //Polling for the sake of the demo
    while (!flux.isDisposed) {
        println("\tWaiting for async publishers...")
        Thread.sleep(100)
    }
}

fun showFluxWithAsyncSubscriber() {
    val data = listOf("abc", "def", "ghi", "jkl", "mno")
    println("--- Flux built via async subscriber ---")
    val flux = Flux.generate<String, Int>(
            { 0 },
            { state, sink ->
                if (state < data.size) {
                    Thread.sleep(250)
                    sink.next(data[state])
                } else {
                    sink.complete()
                }
                state + 1
            })
            .subscribeOn(Schedulers.single())
            .subscribe(
                    { str -> println("\tReceived $str on ${Thread.currentThread().id}") },
                    { error -> println("\tError occurred ($error.message)") },
                    { println("\tAll done") })

    //Polling for the sake of the demo
    while (!flux.isDisposed) {
        println("\tWaiting for async subscriber...")
        Thread.sleep(500)
    }
}