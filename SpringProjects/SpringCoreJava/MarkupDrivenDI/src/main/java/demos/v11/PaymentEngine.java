package demos.v11;

public interface PaymentEngine {
    public boolean authorize(String cardNo, double amount);
}