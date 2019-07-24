package demos.v9;

public interface PaymentEngine {
    public boolean authorize(String cardNo, double amount);
}