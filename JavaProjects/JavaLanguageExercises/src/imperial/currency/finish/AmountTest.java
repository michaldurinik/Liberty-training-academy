package imperial.currency.finish;


import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static java.util.stream.IntStream.rangeClosed;
import static org.junit.jupiter.api.Assertions.assertEquals;


public class AmountTest {
    private Amount amount;

    @BeforeEach
    public void start() {
        amount = new Amount();
    }

    @Test
    public void handlesZero() {
        assertEquals(amount.toString(), "May God bless you");
    }

    @Test
    public void handlesPenniesTo11() {
        amount.add(Unit.PENNY);
        assertEquals(amount.toString(), "1 penny");

        rangeClosed(2, 11).forEach(num -> {
            amount.add(Unit.PENNY);
            String msg = String.format("%s pennies", num);
            assertEquals(amount.toString(), msg);
        });
    }

    @Test
    public void recognises12PenniesToTheShilling() {
        rangeClosed(1,12)
                .forEach(n -> amount.add(Unit.PENNY));
        assertEquals(amount.toString(), "1 shilling");
    }

    @Test
    public void handlesShillingsTo19() {
        amount.add(Unit.SHILLING);
        assertEquals(amount.toString(), "1 shilling");

        rangeClosed(2, 19).forEach(num -> {
            amount.add(Unit.SHILLING);
            String msg = String.format("%s shillings", num);
            assertEquals(amount.toString(), msg);
        });
    }

    @Test
    public void recognises20ShillingsToThePound() {
        rangeClosed(1,20)
                .forEach(n -> amount.add(Unit.SHILLING));
        assertEquals(amount.toString(), "1 pound");
    }

    @Test
    public void recognises21ShillingsToTheGuinea() {
        rangeClosed(1,21)
                .forEach(n -> amount.add(Unit.SHILLING));
        assertEquals(amount.toString(), "1 guinea");
    }

    @Test
    public void handleGuineas() {
        amount.add(Unit.GUINEA);
        assertEquals(amount.toString(), "1 guinea");

        int arbitraryMax = 10;
        rangeClosed(2, arbitraryMax).forEach(num -> {
            amount.add(Unit.GUINEA);
            String msg = String.format("%s guineas", num);
            assertEquals(amount.toString(), msg);
        });
    }

    @Test
    public void handleGuineasAndPounds() {
        amount.add(Unit.GUINEA);
        amount.add(Unit.GUINEA);
        amount.add(Unit.POUND);

        assertEquals(amount.toString(), "2 guineas 1 pound");
    }

    @Test
    public void handleGuineasAndShillings() {
        amount.add(Unit.GUINEA);
        amount.add(Unit.GUINEA);
        amount.add(Unit.SHILLING);
        amount.add(Unit.SHILLING);
        amount.add(Unit.SHILLING);

        assertEquals(amount.toString(), "2 guineas 3 shillings");
    }

    @Test
    public void handleAddingShillingsToPounds() {
        amount.add(Unit.POUND);
        amount.add(Unit.SHILLING);
        amount.add(Unit.SHILLING);
        amount.add(Unit.SHILLING);

        assertEquals(amount.toString(), "1 guinea 2 shillings");
    }

    @Test
    public void handleAddingPenniesToShillings() {
        rangeClosed(1,19)
                .forEach(n -> amount.add(Unit.SHILLING));
        rangeClosed(1,23)
                .forEach(n -> amount.add(Unit.PENNY));
        assertEquals(amount.toString(), "1 pound 11 pennies");
    }

    @Test
    public void handleMixedAmounts() {
        rangeClosed(1,100)
                .forEach(n -> {
            amount.add(Unit.POUND);
            amount.add(Unit.PENNY);
            amount.add(Unit.GUINEA);
            amount.add(Unit.SHILLING);
        });
        assertEquals(amount.toString(), "200 guineas 8 shillings 4 pennies");
    }
}
