package com.example.starcraft.broodwar;

import com.example.starcraft.broodwar.model.Unit;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.List;

@Configuration
public class UnitsConfig {
    @Bean(name = "unitData")
    public List<Unit> function() {
        List<Unit> units = new ArrayList<>();
        units.add(new Unit("Terran", "worker", "SCV"));
        units.add(new Unit("Protoss", "melee", "Zealot"));
        units.add(new Unit("Zerg", "flying", "Mutalisk"));
        return units;
    }
}
