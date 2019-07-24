package demos.groovy.dsl;

import java.util.List;

public class PaymentEngineMock implements PaymentEngine {
    private List<String> bannedCards;

    public PaymentEngineMock(List<String> bannedCards) {
        super();
        this.bannedCards = bannedCards;
    }

    public boolean authorize(String cardNo, double amount) {
        if (bannedCards.contains(cardNo)) {
            return false;
        }
        return amount < 1000;
    }
}
