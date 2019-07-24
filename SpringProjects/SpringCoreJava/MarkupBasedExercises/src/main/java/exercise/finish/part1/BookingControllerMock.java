package exercise.finish.part1;

import java.util.Date;
import java.util.List;

public class BookingControllerMock implements BookingController {
    private FlightSearchEngine searchEngine;
    private FlightBookingService bookingService;

    @Override
    public List<Flight> findAvailableFlights(String origin, String destination, Date departure) {
        return searchEngine.findFlights(origin, destination, departure);
    }

    @Override
    public boolean bookFlight(Flight selected) {
        return bookingService.makeBooking(selected);
    }

    public void setSearchEngine(FlightSearchEngine searchEngine) {
        this.searchEngine = searchEngine;
    }

    public void setBookingService(FlightBookingService bookingService) {
        this.bookingService = bookingService;
    }
}