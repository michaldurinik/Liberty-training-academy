package demos.v10;

public interface PaymentEngine {
	public boolean authorize(String cardNo, double amount);
}