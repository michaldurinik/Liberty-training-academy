package com.lit.academy.com.lit.academy.services;

import com.lit.academy.model.Person;
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

    @RequestMapping(method = RequestMethod.GET)
    public List<Person> getAllPeps() {
        return people;
    }
}
