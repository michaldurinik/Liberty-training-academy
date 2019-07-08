export function Rental(movie, daysRented) {
    this.movie = movie;
    this.daysRented = daysRented;
}

Rental.prototype.points = function () {
    return this.movie.points(this.daysRented);
};

Rental.prototype.cost = function () {
    return this.movie.cost(this.daysRented);
};
