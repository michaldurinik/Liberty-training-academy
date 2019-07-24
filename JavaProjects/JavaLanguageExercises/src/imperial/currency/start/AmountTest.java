package imperial.currency.start;

import org.junit.jupiter.api.Test;

import static imperial.currency.start.Unit.PENNY;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class AmountTest {
    @Test
    public void foobar() {
        Amount amount = new Amount();
        for(int i=0;i<12;i++) {
            amount.add(PENNY);
        }
        assertEquals("1 Shiling", amount.toString());
    }
}
