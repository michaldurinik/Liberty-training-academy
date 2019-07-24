package exercise.finish.part2;

public class FlightBookingServiceMock implements FlightBookingService {
    @Override
    public boolean makeBooking(Flight selected) {
        return true;
    }
}
