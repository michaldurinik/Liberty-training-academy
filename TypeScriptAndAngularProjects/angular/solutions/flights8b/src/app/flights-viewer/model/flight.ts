export class Flight {
  number: number;
  origin: string;
  departure: Date;
  destination: string;
  arrival: Date;

  static fromJson(obj: any): Flight {
    const result = new Flight();
    result.number = parseInt(obj.number, 10);
    result.origin = obj.origin;
    result.departure = new Date(obj.departure);
    result.destination = obj.destination;
    result.arrival = new Date(obj.arrival);
    return result;
  }
}
