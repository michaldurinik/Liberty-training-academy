package demos.v2;

import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;

public class Program {
    public static void main(String[] args) {
        AbstractApplicationContext context = new FileSystemXmlApplicationContext("config/versionTwo.xml");
        Shop shop = context.getBean("shopWithMocks", Shop.class);
        if (shop.makePurchase("AB123", 20, "DEF456GHI78")) {
            System.out.println("Purchase Succeeded");
        } else {
            System.out.println("Purchase Failed");
        }
        context.close();
    }
}
