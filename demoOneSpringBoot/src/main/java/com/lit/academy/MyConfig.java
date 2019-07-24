package com.lit.academy;

import com.lit.academy.model.Person;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.List;

@Configuration
public class MyConfig {
    @Bean(name="sampleData")
    public List<Person> f1() {
        List<Person> people = new ArrayList<>();
            people.add(new Person("Dude", 35));
            people.add(new Person("John", 27));
            people.add(new Person("Karen", 68));
            return people;
    }
}
