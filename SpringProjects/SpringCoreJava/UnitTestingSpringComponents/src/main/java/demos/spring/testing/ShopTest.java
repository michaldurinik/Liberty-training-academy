package demos.spring.testing;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.annotation.Resource;
import java.util.SortedMap;
import java.util.TreeMap;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"/springTesting.xml"})
public class ShopTest {
    private Shop shop;

    @Resource(name = "shop")
    public void setShop(Shop shop) {
        this.shop = shop;
    }

    @Test
    public void shopCanFindUnderstockedItems() {
        SortedMap<String, Integer> testData = new TreeMap<String, Integer>();
        testData.put("AB12", 5);
        testData.put("CD34", 25);
        testData.put("EF56", 25);
        testData.put("GH78", 45);

        String[] outOfStockItems = shop.checkIfOrderPossible(testData);
        assertTrue(outOfStockItems.length == 2);
        assertEquals("CD34", outOfStockItems[0]);
        assertEquals("GH78", outOfStockItems[1]);
    }

    @Test
    public void singleItemsCanBePurchased() {
        assertEquals(12.0, shop.makePurchase("AB12", 10, "XYZ987"), 0.01);
    }

    @Test
    public void multipleItemsCanBePurchased() {
        SortedMap<String, Integer> testData = new TreeMap<String, Integer>();
        testData.put("AB12", 5);
        testData.put("CD34", 15);
        testData.put("EF56", 25);
        testData.put("GH78", 35);

        double retval = shop.makePurchases(testData, "XYZ987");
        assertEquals(470.0, retval, 0.01);
    }
}
