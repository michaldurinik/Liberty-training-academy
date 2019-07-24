package com.lit.academy.com.lit.academy.services;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/shows")
public class FirstService {
    @RequestMapping(method = RequestMethod.GET)
    public List<String> foobar() {
        return Arrays.asList(
                "Show 1",
                "Show 2",
                "Show 3");
    }
}
