package demos.v2;

public class Shop {
    private PricingEngine pricingEngine;
    private StockCheckEngine stockCheckEngine;
    private PaymentEngine paymentEngine;

    public Shop(PricingEngine pricingEngine, StockCheckEngine stockCheckEngine, PaymentEngine paymentEngine) {
        super();
        this.pricingEngine = pricingEngine;
        this.stockCheckEngine = stockCheckEngine;
        this.paymentEngine = paymentEngine;
    }

    public boolean makePurchase(String itemNo, int quantity, String cardNo) {
        if (stockCheckEngine.check(itemNo) >= quantity) {
            double charge = pricingEngine.price(itemNo, quantity);
            if (paymentEngine.authorize(cardNo, charge)) {
                return true;
            }
        }
        return false;
    }
}
