package com.example.starcraft.broodwar.services;

import com.example.starcraft.broodwar.model.Unit;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;
import java.util.Optional;

import static org.springframework.http.ResponseEntity.notFound;

@RestController
@RequestMapping("/units")
public class UnitService {

    @Resource(name = "unitData")
    private List<Unit> units;

    @RequestMapping(method = RequestMethod.GET)
    public List<Unit> allUnits() {
        return units;
    }

    @RequestMapping(
            method = RequestMethod.GET,
            value = "/old/{name}"
    )

    public Unit byName(@PathVariable String name) {
        return units.stream()
                .filter(p -> p.getName().equals(name))
                .findFirst()
                .orElse(new Unit("Xel'naga", "melee", "Hybrid"));
    }

    @RequestMapping(
            method = RequestMethod.GET,
            value = "new/{name}"
    )

    public ResponseEntity<Unit> byNewName(@PathVariable String name) {
        Optional<Unit> result = units.stream()
                .filter(p -> p.getName().equals(name))
                .findFirst();

        return result.map(ResponseEntity::ok)
                .orElse(notFound().build());
    }

    @RequestMapping(
            method = RequestMethod.PUT,
            consumes = "application/json"
    )

    public String addUnit(@RequestBody Unit newUnit) {
        units.add(newUnit);
        return "Request to add an unit received";
    }
}
