package demos.v6;

public interface PaymentEngine {
	public boolean authorize(String cardNo, double amount);
}