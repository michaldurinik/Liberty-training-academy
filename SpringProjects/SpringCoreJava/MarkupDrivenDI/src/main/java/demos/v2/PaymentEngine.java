package demos.v2;

public interface PaymentEngine {
    public boolean authorize(String cardNo, double amount);
}