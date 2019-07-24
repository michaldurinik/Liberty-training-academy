package demos.v3;

public interface PaymentEngine {
    public boolean authorize(String cardNo, double amount);
}