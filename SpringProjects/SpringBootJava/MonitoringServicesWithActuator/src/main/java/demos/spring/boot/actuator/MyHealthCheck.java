package demos.spring.boot.actuator;

import org.springframework.boot.actuate.health.Health;
import org.springframework.boot.actuate.health.HealthIndicator;
import org.springframework.stereotype.Component;

@Component
public class MyHealthCheck implements HealthIndicator {
	@Override
	public Health health() {
		return new Health.Builder()
						 .up()
						 .withDetail("foobar", "1234")
						 .build();
	}
}
