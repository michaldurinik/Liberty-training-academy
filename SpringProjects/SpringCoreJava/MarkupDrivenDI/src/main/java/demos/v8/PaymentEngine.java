package demos.v8;

public interface PaymentEngine {
	public boolean authorize(String cardNo, double amount);
}