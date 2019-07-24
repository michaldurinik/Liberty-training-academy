package demos.v6;

import java.io.IOException;
import java.net.InetAddress;

public class PaymentEngineFactory {
    public PaymentEngine instance(String serverUrl, int timeout) {
        System.out.println("Factory class for payment engines used...");
        try {
            InetAddress address = InetAddress.getByName(serverUrl);
            address.isReachable(timeout);
            return new PaymentEngineImpl(address);
        } catch (IOException e) {
            System.out.println("ERROR: Cant create server");
            return new PaymentEngineImpl();
        }
    }
}
