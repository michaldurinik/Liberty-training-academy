package demos.v5;

import java.io.IOException;
import java.net.InetAddress;

public class PaymentEngineImpl implements PaymentEngine {
    InetAddress address;

    public static PaymentEngine instance(String serverUrl, int timeout) {
        System.out.println("Static factory method for Payment Engines called");
        try {
            InetAddress address = InetAddress.getByName(serverUrl);
            address.isReachable(timeout);
            return new PaymentEngineImpl(address);
        } catch (IOException e) {
            System.out.println("ERROR: Cant create server");
            return new PaymentEngineImpl();
        }
    }

    private PaymentEngineImpl(InetAddress address) {
        super();
        this.address = address;
    }

    private PaymentEngineImpl() {
        super();
    }

    public boolean authorize(String cardNo, double amount) {
        if (address == null) {
            throw new IllegalArgumentException("Cannot connect to server");
        }
        return amount < 1000;
    }
}
