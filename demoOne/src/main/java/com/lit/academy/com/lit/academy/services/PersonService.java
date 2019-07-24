package com.lit.academy.com.lit.academy.services;

import com.lit.academy.model.Person;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

@RestController
@RequestMapping("/person")
public class PersonService {
    @Resource(name="sampleData")
    private List<Person> people;

    @RequestMapping(
            method = RequestMethod.GET,
            value = "/{name}"
    )
public Person byName(@PathVariable String name) {
        return people.stream()
                .filter(p -> p.getName().equals(name))
                .findFirst()
                .orElse(new Person("Dummy", 0));
    }
}
