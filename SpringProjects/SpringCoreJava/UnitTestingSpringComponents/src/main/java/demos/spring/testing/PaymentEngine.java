package demos.spring.testing;

public interface PaymentEngine {
    public boolean authorize(String cardNo, double amount);
}