package exercise.finish.part1;

public class FlightBookingServiceMock implements FlightBookingService {
    @Override
    public boolean makeBooking(Flight selected) {
        return true;
    }
}
