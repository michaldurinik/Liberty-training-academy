package demos.v5;

public interface PaymentEngine {
    public boolean authorize(String cardNo, double amount);
}