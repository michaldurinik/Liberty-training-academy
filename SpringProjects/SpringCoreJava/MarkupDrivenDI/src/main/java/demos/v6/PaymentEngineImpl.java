package demos.v6;

import java.net.InetAddress;

public class PaymentEngineImpl implements PaymentEngine {
    InetAddress address;

    PaymentEngineImpl(InetAddress address) {
        super();
        this.address = address;
    }

    PaymentEngineImpl() {
        super();
    }

    public boolean authorize(String cardNo, double amount) {
        if (address == null) {
            throw new IllegalArgumentException("Cannot connect to server");
        }
        return amount < 1000;
    }
}
