import {Movie} from './movie';
import {Rental} from './rental';
import {Customer} from './customer'

export function runDemo() {
    var peterPan = new Movie("Peter Pan", "CHILDRENS");
    var theHulk = new Movie("The Hulk", "REGULAR");
    var starWars = new Movie("Star Wars", "REGULAR");
    var toyStory = new Movie("Toy Story", "CHILDRENS");
    var killBill = new Movie("Kill Bill", "NEW_RELEASE");

    var r1 = new Rental(peterPan, 2);
    var r2 = new Rental(theHulk, 1);
    var r3 = new Rental(starWars, 3);
    var r4 = new Rental(toyStory, 2);
    var r5 = new Rental(killBill, 4);

    var customer = new Customer("Joe Bloggs");
    customer.addRental(r1);
    customer.addRental(r2);
    customer.addRental(r3);
    customer.addRental(r4);
    customer.addRental(r5);

    var domNode = document.getElementById("statement");
    domNode.innerText = customer.statement();
}
