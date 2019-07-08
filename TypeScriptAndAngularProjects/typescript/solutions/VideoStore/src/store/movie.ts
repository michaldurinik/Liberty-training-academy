import { PriceCode } from "./pricecode"

export class Movie {
    constructor(public title: string, public priceCode: PriceCode) {
    }

    points(daysRented: number): number {
        return this.isBonusApplicable(daysRented) ? 2 : 1;
    }

    private isBonusApplicable(daysRented: number): boolean {
        return this.priceCode == PriceCode.NEW_RELEASE && daysRented > 1;
    }

    cost(daysRented: number): number {
        let cost = 0;
        switch (this.priceCode) {
            case PriceCode.REGULAR:
                cost += 2;
                if (daysRented > 2)
                    cost += (daysRented - 2) * 1.5;
                break;
            case PriceCode.NEW_RELEASE:
                cost += daysRented * 3;
                break;
            case PriceCode.CHILDRENS:
                cost += 1.5;
                if (daysRented > 3)
                    cost += (daysRented - 3) * 1.5;
                break;
        }
        return cost;
    }
}
