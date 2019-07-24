package demos.v6;

public class PaymentEngineMock implements PaymentEngine {
    public boolean authorize(String cardNo, double amount) {
        return amount < 1000;
    }
}
