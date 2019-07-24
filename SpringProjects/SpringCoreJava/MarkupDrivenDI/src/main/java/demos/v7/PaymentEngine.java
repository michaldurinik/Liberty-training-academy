package demos.v7;

public interface PaymentEngine {
	public boolean authorize(String cardNo, double amount);
}