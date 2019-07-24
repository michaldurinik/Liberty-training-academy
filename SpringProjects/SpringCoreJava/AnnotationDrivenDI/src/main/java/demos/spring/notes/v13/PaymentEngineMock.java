package demos.spring.notes.v13;

import demos.spring.notes.common.PaymentEngine;
import org.springframework.stereotype.Component;

@Component("payment")
public class PaymentEngineMock implements PaymentEngine {
    public boolean authorize(String cardNo, double amount) {
        return amount < 1000;
    }
}
