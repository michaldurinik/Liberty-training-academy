package demos.v3;

public class Shop {
    private PricingEngine pricingEngine;
    private StockCheckEngine stockCheckEngine;
    private PaymentEngine paymentEngine;

    public void setPaymentEngine(PaymentEngine paymentEngine) {
        this.paymentEngine = paymentEngine;
    }

    public void setPricingEngine(PricingEngine pricingEngine) {
        this.pricingEngine = pricingEngine;
    }

    public void setStockCheckEngine(StockCheckEngine stockCheckEngine) {
        this.stockCheckEngine = stockCheckEngine;
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
