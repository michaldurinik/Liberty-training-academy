package demos.spring.notes.v4;

import demos.spring.notes.common.StockCheckEngine;
import org.springframework.stereotype.Component;

@Component
public class StockCheckEngineMock implements StockCheckEngine {
    public int check(String itemNo) {
        return 200;
    }
}
