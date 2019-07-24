package demos.groovy.dsl;

public interface PaymentEngine {

    public boolean authorize(String cardNo, double amount);

}