package demos.spring.boot.ConfigurationDemo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ConfigurationDemoApplication {
    public static void main(String[] args) {
        SpringApplication.run(ConfigurationDemoApplication.class, args);
    }

    @Bean
    CommandLineRunner runner() {
        return new CommandLineRunner() {
            @Autowired
            private Settings settings;

            @Override
            public void run(String... args) throws Exception {
                System.out.println("Settings are:");
                printSetting("thing1", settings.getThing1());
                printSetting("thing2", settings.getThing2());
                printSetting("thing3.name", settings.getThing3().getName());
                printSetting("thing3.age", settings.getThing3().getAge());
                printSetting("thing4.name", settings.getThing4().getName());
                printSetting("thing4.age", settings.getThing4().getAge());
            }

            private void printSetting(String name, Object value) {
                System.out.printf("\t%s with value %s\n", name, value);
            }
        };
    }
}

