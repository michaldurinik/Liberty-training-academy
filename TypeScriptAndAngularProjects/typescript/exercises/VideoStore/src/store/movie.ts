export function Movie(title, priceCode) {
    this.title = title;
    this.priceCode = priceCode;
}

Movie.prototype.points = function (daysRented) {
    // add bonus for a two day new release rental
    if ((this.pricecode == "NEW_RELEASE") && daysRented > 1) {
        return 2;
    }
    return 1;
};

Movie.prototype.cost = function (daysRented) {
    var cost = 0;
    switch (this.priceCode) {
        case "REGULAR":
            cost += 2;
            if (daysRented > 2)
                cost += (daysRented - 2) * 1.5;
            break;
        case "NEW_RELEASE":
            cost += daysRented * 3;
            break;
        case "CHILDRENS":
            cost += 1.5;
            if (daysRented > 3)
                cost += (daysRented - 3) * 1.5;
            break;
    }
    return cost;
};
