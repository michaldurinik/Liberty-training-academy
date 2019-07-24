package com.lit.academy;

import com.lit.academy.model.Person;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;
import java.util.List;

@Configuration
public class MyConfig {
    @Bean(name="sampleData")
    public List<Person> f1() {
        return Arrays.asList(
            new Person("Dude", 35),
            new Person("John", 27),
            new Person("Karen", 68)
            );
    }
}
