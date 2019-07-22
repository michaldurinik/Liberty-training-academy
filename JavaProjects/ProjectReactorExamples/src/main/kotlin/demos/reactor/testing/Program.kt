package demos.reactor.testing

import reactor.core.publisher.Flux
import reactor.test.StepVerifier

fun main(args: Array<String>) {
    showBasicVerification()
    showExpectations()
}

private fun showBasicVerification() {
    val data = Flux.just("abc", "def", "ghi", "jkl")
    val verifier = StepVerifier.create(data)
    verifier.expectNext("abc")
    verifier.expectNext("def")
    verifier.expectNext("ghi")
    verifier.expectNext("jkl")
    verifier.verifyComplete()
}

private fun showExpectations() {
    val data = Flux.just("abc", "def", "ghi", "jkl", "mno")
    val verifier = StepVerifier.create(data)
    verifier.expectNextMatches { it.matches(Regex("[a-z]{3}")) }
    verifier.expectNextCount(2)
    verifier.expectNextSequence(listOf("jkl", "mno"))
    verifier.verifyComplete()
}