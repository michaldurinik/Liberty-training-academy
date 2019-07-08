import { Movie } from './movie';

export class Rental {
    constructor(public movie: Movie, public daysRented: number) {
    }

    get points(): number {
        return this.movie.points(this.daysRented);
    }

    get cost(): number {
        return this.movie.cost(this.daysRented);
    }
}
