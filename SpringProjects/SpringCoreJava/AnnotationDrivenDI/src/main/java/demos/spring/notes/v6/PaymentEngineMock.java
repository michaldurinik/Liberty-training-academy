package demos.spring.notes.v6;

import demos.spring.notes.common.PaymentEngine;

public class PaymentEngineMock implements PaymentEngine {
    public boolean authorize(String cardNo, double amount) {
        return amount < 1000;
    }
}
