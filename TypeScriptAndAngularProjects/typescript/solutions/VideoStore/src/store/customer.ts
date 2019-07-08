import {Rental} from './rental'

export class Customer {
    rentals: Rental[];

    constructor(public name: string) {
        this.rentals = [];
    }

    addRental(rental: Rental): void {
        this.rentals.push(rental);
    }

    addRentals(...rentals: Rental[]): void {
        rentals.forEach(x => this.addRental(x));
    }

    totalCost(): number {
        let totalAmount = 0;
        for (let rental of this.rentals) {
            totalAmount += rental.cost;
        }
        return totalAmount;
    }

    totalPoints(): number {
        let allPoints = this.rentals.map(r => r.points);

        //this should be a reduction e.g. using lodash
        let points = 0;
        allPoints.forEach(p => points += p);
        return points;
    }

    statement(): string {
        let result = this.getHeader();
        this.rentals.forEach(x => result += this.getStatementRow(x));
        result += `Amount owed is ${this.totalCost()}\n`;
        result += `You earned ${this.totalPoints()} frequent renter points\n`;

        return result;
    }

    private getStatementRow({daysRented, movie, cost}: Rental): string {
        return `\t${daysRented}\t${movie.title}\t${cost}\n`;
    }

    private getHeader(): string {
        return `\nRental Record for ${this.name}\n`;
    }
}
