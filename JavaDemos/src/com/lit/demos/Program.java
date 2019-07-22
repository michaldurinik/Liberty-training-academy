package com.lit.demos;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.IntStream;
import java.util.stream.Stream;

public class Program {
    public static void main(String[] args) {
        List<String> data = Arrays.asList("abc", "def", "ghi", "jk"
        );
        demoForEach(data);
        demoFilter(data);
        demoMap(data);
        demoReduce(data);
        demoTesting(data);
        demoCollect(data);
        demoFlatMap(data);
    }

    private static void demoFlatMap(List<String> data) {
        System.out.println("Demo FlatMap");
        data.stream()
                .flatMapToInt(String::chars)
                .mapToObj(num -> (char)num)
                .forEach(System.out::println);
    }

    private static void demoCollect(List<String> data) {
        Map<Boolean, List<String>> results = data.stream()
                .collect(Collectors.partitioningBy(s -> s.length() > 3));
        System.out.println("Values passing test");
        results.get(true).forEach(System.out::println);
        System.out.println("Values failing test");
        results.get(false).forEach(System.out::println);
    }

    private static void demoTesting(List<String> data) {
        boolean result1 = data.stream().allMatch(s -> s.length() == 4);
        boolean result2 = data.stream().anyMatch(s -> s.length() == 4);
        boolean result3 = data.stream().noneMatch(s -> s.length() == 4);

        System.out.println(result1);
        System.out.println(result2);
        System.out.println(result3);
    }

    private static void demoReduce(List<String> data) {
        System.out.println("Demo Reduce");
        System.out.println(data.stream()
                .mapToInt(String::length)
                .sum());

        System.out.println(data.stream()
                .map(String::length)
                .reduce((a, b) -> a + b)
                .orElse(0));
    }

    private static void demoMap(List<String> data) {
        System.out.println("Demo Map");
        Stream<Integer> tmp = data.stream().map(String::length);
        tmp.forEach(System.out::println);

        System.out.println("Demo Map To Int");
        IntStream tmp2 = data.stream().mapToInt(String::length);
        tmp2.forEach(System.out::println);
    }

    private static void demoFilter(List<String> data) {
        System.out.println("Demo filter");
        data.stream()
                .filter(s -> s.length() == 3)
                .forEach(System.out::println);
    }

    private static void demoForEach(List<String> data) {
        System.out.println("for each done wrong");
        data.stream().forEach(s -> System.out.println(s));
        System.out.println("right way to do it");
        data.forEach(System.out::println);
    }
}
