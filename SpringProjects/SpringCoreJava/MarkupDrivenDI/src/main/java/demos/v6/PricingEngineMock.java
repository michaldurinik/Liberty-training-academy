package demos.v6;

public class PricingEngineMock implements PricingEngine {
    double minimumDiscountAmount;
    int percentageDiscount;

    public void setMinimumDiscountAmount(double minimumDiscountAmount) {
        this.minimumDiscountAmount = minimumDiscountAmount;
    }

    public void setPercentageDiscount(int percentageDiscount) {
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
