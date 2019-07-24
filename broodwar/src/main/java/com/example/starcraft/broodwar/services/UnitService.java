package com.example.starcraft.broodwar.services;

import com.example.starcraft.broodwar.model.Unit;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

@RestController
@RequestMapping("/units")
public class UnitService {

    @Resource(name = "unitData")
    private List<Unit> units;

    @RequestMapping(method = RequestMethod.GET)
    public List<Unit> allUnits() {
        return units;
    }
}
