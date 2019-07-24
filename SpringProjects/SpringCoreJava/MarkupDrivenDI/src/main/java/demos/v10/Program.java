package demos.v10;

import org.springframework.beans.factory.BeanFactory;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;

public class Program {
    public static void main(String[] args) throws Exception {
        AbstractApplicationContext context = new FileSystemXmlApplicationContext("config/versionTen.xml");
        useBean(context, "testShop1");
        useBean(context, "testShop2");
        useBean(context, "testShop3");
        context.close();
    }

    private static void useBean(BeanFactory factory, String name) {
        Shop shop = factory.getBean(name, Shop.class);
        System.out.println("----- Testing " + shop.getShopName() + " -----");
        if (shop.makePurchase("ABC123", 9, "DEF456GHI78")) {
            System.out.println("Purchase Succeeded");
        } else {
            System.out.println("Purchase Failed");
        }
    }
}
