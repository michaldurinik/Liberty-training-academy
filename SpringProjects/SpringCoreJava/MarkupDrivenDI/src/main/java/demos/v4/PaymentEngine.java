package demos.v4;

public interface PaymentEngine {
    public boolean authorize(String cardNo, double amount);
}