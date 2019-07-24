package demos.spring.testing;

import java.util.ArrayList;
import java.util.List;
import java.util.SortedMap;

public class Shop {
    private PricingEngine pricingEngine;
    private StockCheckEngine stockCheckEngine;
    private PaymentEngine paymentEngine;

    public double makePurchase(String itemNo, int quantity, String cardNo) {
        if (stockCheckEngine.check(itemNo) >= quantity) {
            double charge = pricingEngine.price(itemNo, quantity);
            if (paymentEngine.authorize(cardNo, charge)) {
                return charge;
            }
        }
        return 0;
    }

    public String[] checkIfOrderPossible(SortedMap<String, Integer> items) {
        List<String> itemsUnderstocked = new ArrayList<String>();
        for (SortedMap.Entry<String, Integer> entry : items.entrySet()) {
            if (stockCheckEngine.check(entry.getKey()) < entry.getValue()) {
                itemsUnderstocked.add(entry.getKey());
            }
        }
        return itemsUnderstocked.toArray(new String[itemsUnderstocked.size()]);
    }

    public double makePurchases(SortedMap<String, Integer> items, String cardNo) {
        String[] understocked = checkIfOrderPossible(items);
        if (understocked.length == 0) {
            double charge = 0;
            for (SortedMap.Entry<String, Integer> entry : items.entrySet()) {
                charge += pricingEngine.price(entry.getKey(), entry.getValue());
            }
            if (paymentEngine.authorize(cardNo, charge)) {
                return charge;
            }
        }
        return 0;
    }

    public void setPricingEngine(PricingEngine pricingEngine) {
        this.pricingEngine = pricingEngine;
    }

    public void setStockCheckEngine(StockCheckEngine stockCheckEngine) {
        this.stockCheckEngine = stockCheckEngine;
    }

    public void setPaymentEngine(PaymentEngine paymentEngine) {
        this.paymentEngine = paymentEngine;
    }
}