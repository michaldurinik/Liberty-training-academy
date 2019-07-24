package exercise.start;

public class FlightBookingServiceMock implements FlightBookingService {
    @Override
    public boolean makeBooking(Flight selected) {
        return true;
    }
}
