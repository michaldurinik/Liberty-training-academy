package demos.spring.data;

import demos.spring.data.entities.Delivery;
import org.springframework.data.repository.CrudRepository;

public interface DeliveryRepository extends CrudRepository<Delivery, Integer> {
}
