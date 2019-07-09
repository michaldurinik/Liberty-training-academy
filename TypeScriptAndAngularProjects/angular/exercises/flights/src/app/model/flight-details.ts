export class FlightDetails {
  number: number;
  origin: string;
  destination: string;
  departure: Date;
  arrival: Date;

  constructor(obj: any) {
    this.number = parseInt(obj.number, 10);
    this.origin = obj.origin;
    this.departure = new Date(obj.departure);
    this.destination = obj.destination;
    this.arrival = new Date(obj.arrival);
  }
}


