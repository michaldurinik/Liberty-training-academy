package demos.groovy.dsl;

import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.GenericGroovyApplicationContext;

public class Program {
    public static void main(String[] args) throws Exception {
        AbstractApplicationContext context = new GenericGroovyApplicationContext("file:config/wiring.groovy");
        Shop shop = context.getBean("shopWithMocks", Shop.class);

        System.out.println("----- Testing " + shop.getShopName() + " -----");

        if (shop.isOpenDuringWeekends()) {
            System.out.println("\tShop open during weekends");
        } else {
            System.out.println("\tShop closed at weekends");
        }

        System.out.println("----- List of Junior Staff -----");
        for (Employee emp : shop.getJuniorStaff()) {
            System.out.print("\t");
            System.out.println(emp);
        }

        System.out.println("----- List of Senior Staff -----");
        for (Employee emp : shop.getSeniorStaff()) {
            System.out.print("\t");
            System.out.println(emp);
        }

        System.out.println("----- List of Staff Names -----");
        for (String name : shop.getStaffNames()) {
            System.out.print("\t");
            System.out.println(name);
        }

        System.out.println("----- Trying to make purchase -----");
        if (shop.makePurchase("ABC123", 9, "DEF456GHI78")) {
            System.out.println("\tSample purchase succeeded");
        } else {
            System.out.println("\tSample purchase failed");
        }

        context.close();
    }
}
