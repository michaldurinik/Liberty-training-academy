package demos.reactor.hello

import reactor.core.publisher.Flux
import java.util.*
import java.util.stream.Stream

fun main(args: Array<String>) {
    val loremIpsum = """Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum."""

    val flux = Flux.fromIterable(loremIpsum.split(" "))
    flux.map { it.toLowerCase() }
            .flatMap { word -> Flux.fromArray(word.toCharArray().toTypedArray()) }
            .filter { theChar -> Character.isLetter(theChar) }
            .collectMultimap { it }
            .map { table -> table.mapValues { entry -> entry.value.size } }
            .subscribe(::printTable)
}

fun printTable(input: Map<Char, Int>) {
    println("The frequency count of letters in 'lorem ipsum' is:")
    input.forEach { entry ->
        val msgWord = "instance" + if (entry.value > 1) "s" else ""
        println("${entry.value} $msgWord of ${entry.key}")
    }
}

