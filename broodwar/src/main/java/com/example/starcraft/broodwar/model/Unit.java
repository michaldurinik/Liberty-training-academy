package com.example.starcraft.broodwar.model;

public class Unit {
    private String race;
    private String type;
    private String name;

    public Unit(String race, String type, String name) {
        this.race = race;
        this.type = type;
        this.name = name;
    }

    public String getRace() {
        return race;
    }

    public void setRace(String race) {
        this.race = race;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}


