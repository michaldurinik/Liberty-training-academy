package com.lit.academy.services;

import com.lit.academy.model.Person;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;
import java.util.Optional;

import static org.springframework.http.ResponseEntity.notFound;

@RestController
@RequestMapping("/person")
public class PersonService {

    @Resource(name="sampleData")
    private List<Person> people;

    @RequestMapping(method= RequestMethod.GET)
    public List<Person> allPeople(){
        return people;
    }

    @RequestMapping(
            method= RequestMethod.GET,
            value="/old/{name}"
    )

    public Person byName(@PathVariable String name){
        return people.stream()
                .filter(p -> p.getName().equals(name))
                .findFirst()
                .orElse(new Person("Dummy",0));
    }

    @RequestMapping(
            method= RequestMethod.GET,
            value="/new/{name}"
    )
    public ResponseEntity<Person> byNameNew(@PathVariable String name){
        Optional<Person> result = people.stream()
                .filter(p -> p.getName().equals(name))
                .findFirst();

        return result.map(ResponseEntity::ok)
                .orElse(notFound().build());
    }
}
