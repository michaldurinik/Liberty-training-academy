package demos.groovy.dsl;

import java.util.List;

public class Shop {
    private String shopName;
    private PricingEngine pricingEngine;
    private StockCheckEngine stockCheckEngine;
    private PaymentEngine paymentEngine;
    private boolean openDuringWeekends;
    private List<Employee> juniorStaff;
    private List<Employee> seniorStaff;
    private List<String> staffNames;

    public void setPaymentEngine(PaymentEngine paymentEngine) {
        this.paymentEngine = paymentEngine;
    }

    public void setPricingEngine(PricingEngine pricingEngine) {
        this.pricingEngine = pricingEngine;
    }

    public void setStockCheckEngine(StockCheckEngine stockCheckEngine) {
        this.stockCheckEngine = stockCheckEngine;
    }

    public String getShopName() {
        return shopName;
    }

    public void setShopName(String shopName) {
        this.shopName = shopName;
    }

    public boolean isOpenDuringWeekends() {
        return openDuringWeekends;
    }

    public void setOpenDuringWeekends(boolean openDuringWeekends) {
        this.openDuringWeekends = openDuringWeekends;
    }

    public List<Employee> getJuniorStaff() {
        return juniorStaff;
    }

    public void setJuniorStaff(List<Employee> juniorStaff) {
        this.juniorStaff = juniorStaff;
    }

    public List<Employee> getSeniorStaff() {
        return seniorStaff;
    }

    public void setSeniorStaff(List<Employee> seniorStaff) {
        this.seniorStaff = seniorStaff;
    }

    public List<String> getStaffNames() {
        return staffNames;
    }

    public void setStaffNames(List<String> staffNames) {
        this.staffNames = staffNames;
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
