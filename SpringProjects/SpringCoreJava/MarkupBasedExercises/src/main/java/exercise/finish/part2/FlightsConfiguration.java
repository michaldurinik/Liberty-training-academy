package exercise.finish.part2;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class FlightsConfiguration {
    public FlightsTableModel getSpecialOffers() {
        List<Flight> offers = new ArrayList<Flight>();
        offers.add(new Flight("Dublin", "New York", new Date()));
        offers.add(new Flight("Dublin", "Paris", new Date()));
        offers.add(new Flight("Dublin", "Barcelona", new Date()));
        return new FlightsTableModel(offers);
    }

    public FlightsListModel getAirports() {
        List<String> results = new ArrayList<String>();
        results.add("Heathrow");
        results.add("Belfast International");
        results.add("Belfast City");
        results.add("Dublin");
        results.add("Birmingham");
        results.add("Luton");
        return new FlightsListModel(results);
    }

    public String[] getMonths() {
        return new String[]{"January", "February", "March", "April", "May",
                "June", "July", "August", "September", "October",
                "November", "December"};
    }

    public Integer[] getDays() {
        Integer[] days = new Integer[31];
        for (int i = 0; i < days.length; i++) {
            days[i] = i + 1;
        }
        return days;
    }
}
