export class Flight {
  number: number;
  origin: string;
  departure: Date;
  destination: string;
  arrival: Date;

  constructor(obj: any) {
    this.number = parseInt(obj.number, 10);
    this.origin = obj.origin;
    this.departure = new Date(obj.departure);
    this.destination = obj.destination;
    this.arrival = new Date(obj.arrival);
  }
}
