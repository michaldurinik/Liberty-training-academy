package demos.reactor.testing;

import reactor.core.publisher.Flux;
import reactor.test.StepVerifier;

import java.util.Arrays;

class Program {

    public static void main(String[] args) {
        showBasicVerification();
        showExpectations();
    }

    private static void showBasicVerification() {
        Flux<String> data = Flux.just("abc", "def", "ghi", "jkl");
        StepVerifier.FirstStep<String> verifier = StepVerifier.create(data);
        verifier.expectNext("abc");
        verifier.expectNext("def");
        verifier.expectNext("ghi");
        verifier.expectNext("jkl");
        verifier.verifyComplete();
    }

    private static void showExpectations() {
        Flux<String> data = Flux.just("abc", "def", "ghi", "jkl", "mno");
        StepVerifier.FirstStep<String> verifier = StepVerifier.create(data);
        verifier.expectNextMatches(str -> str.matches("[a-z]{3}"));
        verifier.expectNextCount(2);
        verifier.expectNextSequence(Arrays.asList("jkl", "mno"));
        verifier.verifyComplete();
    }
}