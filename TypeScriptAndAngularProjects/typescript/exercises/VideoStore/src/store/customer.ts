export function Customer(name) {
    this.name = name;
    this.rentals = [];
}

Customer.prototype.addRental = function (rental) {
    this.rentals.push(rental);
};

Customer.prototype.totalCost = function () {
    var totalAmount = 0;
    for (var x = 0; x < this.rentals.length; x++) {
        var rental = this.rentals[x];
        totalAmount += rental.cost();
    }
    return totalAmount;
};

Customer.prototype.totalPoints = function () {
    var points = 0;
    for (var x = 0; x < this.rentals.length; x++) {
        var rental = this.rentals[x];
        points += rental.points();
    }
    return points;
};

Customer.prototype.statement = function () {
    var result = "";
    // add header lines
    result += "\nRental Record for ";
    result += this.name;
    result += "\n";
    for (var x = 0; x < this.rentals.length; x++) {
        var rental = this.rentals[x];
        // show figures for this rental
        result += "\t";
        result += rental.daysRented;
        result += "\t";
        result += rental.movie.title;
        result += "\t";
        result += rental.cost();
        result += "\n";
    }
    // add footer lines
    result += "Amount owed is ";
    result += this.totalCost();
    result += "\n";
    result += "You earned ";
    result += this.totalPoints();
    result += " frequent renter points\n";
    return result.toString();
};
