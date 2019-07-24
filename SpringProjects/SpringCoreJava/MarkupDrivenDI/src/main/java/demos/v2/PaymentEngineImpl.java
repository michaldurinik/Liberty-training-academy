package demos.v2;

import java.io.IOException;
import java.net.InetAddress;

public class PaymentEngineImpl implements PaymentEngine {
    private String serverUrl;
    private int timeout;

    public PaymentEngineImpl(String serverUrl, int timeout) {
        this.serverUrl = serverUrl;
        this.timeout = timeout;
    }

    public boolean authorize(String cardNo, double amount) {
        try {
            InetAddress address = InetAddress.getByName(serverUrl);
            address.isReachable(timeout);
        } catch (IOException e) {
            throw new IllegalArgumentException("Cannot connect to server");
        }
        return amount < 1000;
    }
}
