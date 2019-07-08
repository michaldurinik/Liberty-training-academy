const express = require('express');    // call express
const app = express();                 // define our app using express
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 8080;
const router = express.Router();

class Flight {
    constructor(number,
                origin,
                destination,
                departure,
                arrival) {
        this.number = number;
        this.origin = origin;
        this.destination = destination;
        this.departure = departure;
        this.arrival = arrival;
    }
}

let date = new Date();
function getDate() {
    const newDate = new Date();
    newDate.setDate(date.getDate() + 1);
    date = newDate;
    return newDate;
}


const flights = [
    new Flight(101, "Belfast City", "London Gatwick", getDate(), getDate()),
    new Flight(102, "Belfast City", "London Gatwick", getDate(), getDate()),
    new Flight(103, "Belfast City", "London Gatwick", getDate(), getDate()),
    new Flight(104, "Belfast City", "London Gatwick", getDate(), getDate()),
    new Flight(105, "Belfast City", "London Gatwick", getDate(), getDate()),
    new Flight(201, "Belfast City", "Birmingham", getDate(), getDate()),
    new Flight(202, "Belfast City", "Birmingham", getDate(), getDate()),
    new Flight(203, "Belfast City", "Birmingham", getDate(), getDate()),
    new Flight(204, "Belfast City", "Birmingham", getDate(), getDate()),
    new Flight(205, "Belfast City", "Birmingham", getDate(), getDate()),
    new Flight(301, "Dublin", "Edinburgh", getDate(), getDate()),
    new Flight(302, "Dublin", "Edinburgh", getDate(), getDate()),
    new Flight(303, "Dublin", "Edinburgh", getDate(), getDate()),
    new Flight(304, "Dublin", "Edinburgh", getDate(), getDate()),
    new Flight(305, "Dublin", "Edinburgh", getDate(), getDate()),
    new Flight(401, "Dublin", "Manchester", getDate(), getDate()),
    new Flight(402, "Dublin", "Manchester", getDate(), getDate()),
    new Flight(403, "Dublin", "Manchester", getDate(), getDate()),
    new Flight(404, "Dublin", "Manchester", getDate(), getDate()),
    new Flight(405, "Dublin", "Manchester", getDate(), getDate())
];

router.get('/', (req, res) => {
    res.json(flights);
});

router.get('/origin/:origin', (req, res) => {
    res.json(flights.filter(x => x.origin === req.params.origin));
});

router.get('/destination/:destination', (req, res) => {
    res.json(flights.filter(x => x.destination === req.params.destination));
});

router.get('/:number', (req, res) => {
    let flightId = Number(req.params.number);
    const flight = flights.find(x => x.number === flightId);
    if (flight) {
        res.json(flight);
    }
    else {
        console.log("Could not find");
        res.status(204);
        res.send("No flight found");
    }
});

router.delete('/:number', (req, res) => {
    let flightId = Number(req.params.number);
    const flightIndex = flights.findIndex(x => x.number === flightId);
    if (flightIndex > -1) {
        flights.splice(flightIndex, 1);
        res.json(true);	    
    }
    else {
        console.log("Could not find");
        res.status(204);
        res.send("No flight found");
    }
});


router.put('/:number', (req, res) => {
    let flightId = Number(req.params.number);
    const index = flights.findIndex(x => x.number === Number(req.params.number));
    if (index != -1) {
        flights.splice(index, 1);
        flights.push(req.body);
        res.json(req.body);
    }
    else {
        res.status(204);
        res.send("No flight found");
    }
});

app.use('/flights', router);
app.listen(port);

console.log('Magic happens on port ' + port);
