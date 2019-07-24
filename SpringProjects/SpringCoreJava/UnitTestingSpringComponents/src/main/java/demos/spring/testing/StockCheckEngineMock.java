package demos.spring.testing;

import java.util.Map;

public class StockCheckEngineMock implements StockCheckEngine {
    private Map<String, Integer> items;

    public StockCheckEngineMock(Map<String, Integer> items) {
        super();
        this.items = items;
    }

    public int check(String itemNo) {
        return items.get(itemNo);
    }
}
