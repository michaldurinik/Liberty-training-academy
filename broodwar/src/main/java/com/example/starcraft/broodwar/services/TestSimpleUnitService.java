package com.example.starcraft.broodwar.services;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/simpleunits")
public class TestSimpleUnitService {
    @RequestMapping(method = RequestMethod.GET)
    public List<String> getSimpleUnits() {
        return Arrays.asList(
                "protoss unit",
                "terran unit",
                "zerg unit"
        );
    }
}
