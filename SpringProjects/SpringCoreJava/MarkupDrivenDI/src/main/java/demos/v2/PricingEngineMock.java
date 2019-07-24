package demos.v2;

public class PricingEngineMock implements PricingEngine {
    double minimumDiscountAmount;
    int percentageDiscount;

    public PricingEngineMock(double minimumDiscountAmount, int percentageDiscount) {
        super();
        this.minimumDiscountAmount = minimumDiscountAmount;
        this.percentageDiscount = percentageDiscount;
    }

    public double price(String itemNo, int quantity) {
        double price = quantity * 5.50;
        if (price >= minimumDiscountAmount) {
            price = price - (price * (percentageDiscount / 100));
        }
        return price;
    }
}
