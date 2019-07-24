package demos.v1;

public class Program {
    public static void main(String[] args) throws Exception {
        Shop shop = new Shop();
        if (shop.makePurchase("AB123", 20, "DEF456GHI78")) {
            System.out.println("Purchase Succeeded");
        } else {
            System.out.println("Purchase Failed");
        }
    }
}
