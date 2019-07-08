const express = require('express');    // call express
const app = express();                 // define our app using express
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const port = 8080;
const router = express.Router();

const BEGINNER = "BEGINNER";
const INTERMEDIATE = "INTERMEDIATE";
const ADVANCED = "ADVANCED";

class Course {
    constructor(id,
                title,
                difficulty,
                duration) {
        this.id = id;
        this.title = title;
        this.difficulty = difficulty;
        this.duration = duration;
    }
}

const courses = new Map();
courses.set("AB12", new Course("AB12", "Intro to Scala", BEGINNER, 4));
courses.set("CD34", new Course("CD34", "JEE Web Development", INTERMEDIATE, 3));
courses.set("EF56", new Course("EF56", "Meta-Programming in Ruby", ADVANCED, 2));
courses.set("GH78", new Course("GH78", "OO Design with UML", BEGINNER, 3));
courses.set("IJ90", new Course("IJ90", "Database Access with JPA", INTERMEDIATE, 3));
courses.set("KL12", new Course("KL12", "Design Patterns in C#", ADVANCED, 2));
courses.set("MN34", new Course("MN34", "Relational Database Design", BEGINNER, 4));
courses.set("OP56", new Course("OP56", "Writing MySql Stored Procedures", INTERMEDIATE, 1));
courses.set("QR78", new Course("QR78", "Patterns of Parallel Programming", ADVANCED, 2));
courses.set("ST90", new Course("ST90", "C++ Programming for Beginners", BEGINNER, 5));
courses.set("UV12", new Course("UV12", "UNIX Threading with PThreads", INTERMEDIATE, 2));
courses.set("WX34", new Course("WX34", "Writing Linux Device Drivers", ADVANCED, 3));

router.get('/', (req, res) => {
    const values = [];
    for(let value of courses.values()) {
        values.push(value);
    }

    res.json(values);
});

router.get('/:id', (req, res) => {
    if (courses.has(req.params.id)) {
        res.json(courses.get(req.params.id));
    }
    else {
        console.log("Could not find");
        res.status(204);
        res.send("No course found");
    }
});

router.delete('/:id', (req, res) => {
    console.log(`Deleting Course: [ ${req.params.id} ]`);
    if (courses.has(req.params.id)) {
        courses.delete(req.params.id);
        res.status(200);
        res.send(req.params.id);
    }
    else {
        console.log("Could not find");
        res.status(204);
        res.send("No course found");
    }
});

router.put('/:id', (req, res) => {
    let course = req.body;
    console.log(`Updating Course: [ ${course.id} ]`);
    courses.set(req.params.id, course);
    res.send(req.params.id);
});


router.post('', (req, res) => {
    let course = req.body;
    console.log(`Adding Course: [ ${JSON.stringify(course)} ]`);
    courses.set(course.id, course);
    res.send(course.id);
});

app.use('/courses', router);
app.listen(port);

console.log('Magic happens on port ' + port);
