package demos.spring.boot.ConfigurationDemo;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.Pattern;

public class Employee {
    private String name;
    private int age;

    @Pattern(regexp = "[A-Za-z]+")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Min(16)
    @Max(65)
    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}
