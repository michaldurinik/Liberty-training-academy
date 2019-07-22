package demos.reactor.threading;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import reactor.core.scheduler.Schedulers;

import java.text.DecimalFormat;
import java.util.Scanner;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;
import java.util.stream.Stream;

import static java.lang.String.format;

class Program {

    public static void main(String[] args) {
        ExecutorService pool1 = Executors.newFixedThreadPool(2);
        ExecutorService pool2 = Executors.newFixedThreadPool(2);

        runUI(pool1, pool2);
    }

    private static void runUI(ExecutorService... pools) {
        printMenu();
        runLoop(pools);
        tidyUp(pools);
    }

    private static void printMenu() {
        System.out.println("--- Demos of Threading and Flux ---");
        System.out.println("\t1) Async Publisher");
        System.out.println("\t2) Async Subscriber");
        System.out.println("\t3) Async Publisher and Subscriber");
        System.out.println("\t4) Async and the Flatmap operation");
        System.out.println("\t5) Parallel Flux");
        System.out.println("\t6) Exit");
    }

    private static void tidyUp(ExecutorService... pools) {
        System.out.println("Shutting down thread pools");
        Stream.of(pools).forEach(pool -> {
            pool.shutdown();
            try {
                pool.awaitTermination(10, TimeUnit.SECONDS);
            } catch (InterruptedException e) {
                System.err.println("Termination interrupted");
            }
        });
        System.out.println("Bye...");
    }

    private static void runLoop(ExecutorService... pools) {
        Scanner scanner = new Scanner(System.in);
        loop:
        while (scanner.hasNext()) {
            int choice = scanner.nextInt();
            switch (choice) {
                case 1:
                    showAsyncPublisher(pools[0]);
                    break;
                case 2:
                    showAsyncSubscriber(pools[0]);
                    break;
                case 3:
                    showAsyncPublisherAndSubscriber(pools[0], pools[1]);
                    break;
                case 4:
                    showAsyncFlatMap(pools[0]);
                    break;
                case 5:
                    showParallelFlux(pools[0]);
                    break;
                case 6:
                    break loop;
            }
        }
    }

    private static String threadId() {
        return String.valueOf(Thread.currentThread().getId());
    }

    private static void printTabbed(String str) {
        System.out.println("\t" + str);
    }

    private static String genValue() {
        DecimalFormat df = new DecimalFormat("00.00");
        return df.format(Math.random() * 100);
    }

    private static void showAsyncPublisher(ExecutorService pool) {
        System.out.println("--- Flux With Async Publisher ---");
        Mono.fromCallable(Program::genValue)
                .repeat(100)
                .doOnNext(s -> printTabbed(format("%s generated on %s", s, threadId())))
                .publishOn(Schedulers.fromExecutor(pool))
                .doOnNext(s -> printTabbed(format("%s moved to %s", s, threadId())))
                .subscribe(s -> printTabbed(format("%s received on %s", s, threadId())));

    }

    private static void showAsyncSubscriber(ExecutorService pool) {
        System.out.println("--- Flux With Async Subscriber ---");
        Flux<String> flux = Mono.fromCallable(Program::genValue)
                .repeat(10)
                .doOnNext(s -> printTabbed(format("%s generated on %s", s, threadId())))
                .subscribeOn(Schedulers.fromExecutor(pool))
                .doOnNext(s -> printTabbed(format("%s still on %s", s, threadId())));

        flux.subscribe(s -> printTabbed(format("%s received by S1 on %s", s, threadId())));
        flux.subscribe(s -> printTabbed(format("%s received by S2 on %s", s, threadId())));
    }

    private static void showAsyncPublisherAndSubscriber(ExecutorService pool1, ExecutorService pool2) {
        System.out.println("--- Flux With Async Publisher And Subscriber ---");
        Flux<String> flux = Mono.fromCallable(Program::genValue)
                .repeat(10)
                .doOnNext(s -> printTabbed(format("%s generated on %s", s, threadId())))
                .subscribeOn(Schedulers.fromExecutor(pool1))
                .publishOn(Schedulers.fromExecutor(pool2))
                .doOnNext(s -> printTabbed(format("%s now on %s", s, threadId())));

        flux.subscribe(s -> printTabbed(format("%s received by S1 on %s", s, threadId())));
        flux.subscribe(s -> printTabbed(format("%s received by S2 on %s", s, threadId())));
    }

    private static void showAsyncFlatMap(ExecutorService pool) {
        System.out.println("--- Async with FlatMap ---");
        Flux.just("A", "B")
                .flatMap(str ->
                        Flux.range(1, 10)
                                .map(num -> str + num)
                                .subscribeOn(Schedulers.fromExecutor(pool)))
                .subscribe(s -> printTabbed(format("%s received on %s", s, threadId())));
    }

    private static void showParallelFlux(ExecutorService pool) {
        System.out.println("--- Parallel Flux ---");
        Mono.fromCallable(Program::genValue)
                .repeat(10)
                .parallel()
                .runOn(Schedulers.fromExecutor(pool))
                .subscribe(s -> printTabbed(format("%s received by subscriber on %s", s, threadId())));

    }
}