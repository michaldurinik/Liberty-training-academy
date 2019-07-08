import {PriceCode} from "./pricecode"
import {Movie} from './movie';
import {Rental} from './rental';
import {Customer} from './customer'

export function runDemo() {
    const peterPan = new Movie("Peter Pan", PriceCode.CHILDRENS);
    const theHulk = new Movie("The Hulk", PriceCode.REGULAR);
    const starWars = new Movie("Star Wars", PriceCode.REGULAR);
    const toyStory = new Movie("Toy Story", PriceCode.CHILDRENS);
    const killBill = new Movie("Kill Bill", PriceCode.NEW_RELEASE);

    const customer = new Customer("Joe Bloggs");
    customer.addRentals(
        new Rental(peterPan, 2),
        new Rental(theHulk, 1),
        new Rental(starWars, 3),
        new Rental(toyStory, 2),
        new Rental(killBill, 4)
    );

    const domNode = document.getElementById("statement");
    domNode.innerText = customer.statement();
}
