package demos.spring.boot.ConfigurationDemo;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.validation.annotation.Validated;

@Validated
@Configuration
@PropertySource("classpath:things.properties")
@ConfigurationProperties(prefix = "stuff")
public class Settings {
    private int thing1;
    private String thing2;
    private Person thing3;
    private Employee thing4;

    public int getThing1() {
        return thing1;
    }

    public void setThing1(int thing1) {
        this.thing1 = thing1;
    }

    public String getThing2() {
        return thing2;
    }

    public void setThing2(String thing2) {
        this.thing2 = thing2;
    }

    public Person getThing3() {
        return thing3;
    }

    public void setThing3(Person thing3) {
        this.thing3 = thing3;
    }

    public Employee getThing4() {
        return thing4;
    }

    public void setThing4(Employee thing4) {
        this.thing4 = thing4;
    }
}
