package demos.v9;

import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;

public class Program {
    public static void main(String[] args) throws Exception {
        AbstractApplicationContext context = new FileSystemXmlApplicationContext("config/versionNine.xml");
        Shop shop = context.getBean("shopWithMocks", Shop.class);
        // quantity should be too high
        if (shop.makePurchase("ABC123", 20, "DEF456GHI78")) {
            System.out.println("First Purchase Succeeded");
        } else {
            System.out.println("First Purchase Failed");
        }
        // quantity should be fine
        if (shop.makePurchase("ABC123", 5, "DEF456GHI78")) {
            System.out.println("Second Purchase Succeeded");
        } else {
            System.out.println("Second Purchase Failed");
        }
        context.close();
    }
}
