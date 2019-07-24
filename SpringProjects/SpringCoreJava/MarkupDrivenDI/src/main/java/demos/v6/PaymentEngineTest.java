package demos.v6;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;

public class PaymentEngineTest {
    AbstractApplicationContext context;

    @Before
    public void start() {
        context = new FileSystemXmlApplicationContext("config/versionSix.xml");
    }

    @After
    public void end() {
        context.close();
    }

    @Test(expected = IllegalArgumentException.class)
    public void badServerName() {
        PaymentEngine engine = (PaymentEngine) context.getBean("paymentImplOne");
        engine.authorize("BAD", 0);
    }
}