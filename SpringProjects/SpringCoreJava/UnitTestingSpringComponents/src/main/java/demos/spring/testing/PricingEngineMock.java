package demos.spring.testing;

import java.util.List;

public class PricingEngineMock implements PricingEngine {
    private List<Double> prices;
    private int index;

    public PricingEngineMock(List<Double> prices) {
        super();
        this.prices = prices;
    }

    public double price(String itemNo, int quantity) {
        double retval = quantity * prices.get(index++);

        if (index == prices.size()) {
            index = 0;
        }
        return retval;
    }
}
