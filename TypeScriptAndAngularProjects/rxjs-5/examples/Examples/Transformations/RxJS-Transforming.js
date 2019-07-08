const outputAreas = [
    document.getElementById("source"),
    document.getElementById("map"),
    document.getElementById("pairs"),
    document.getElementById("buffer"),
    document.getElementById("scan"),
    document.getElementById("boing")
];
const SOURCE = 0, MAP = 1, PAIRS = 2;
const BUFFER = 3, SCAN = 4, BOING= 5;

function output(col, text) {
    outputAreas[col].innerHTML += text + "<br/>";
}

function asyncSequence(observer) {
    function generateNextValue() {
        if (counter > 30) {
            observer.complete();
            return;
        }

        observer.next(counter++);
        setTimeout(generateNextValue, 1000);
    }

    let counter = 1;
    generateNextValue();
}

// Using Subjects means all subscriptions
//   are from a single source
let subject = new Rx.Subject();
Rx.Observable.create(asyncSequence)
    .subscribe(subject)

subject.subscribe(x => output(SOURCE, x));

subject.map(x => x*x).subscribe(x => output(MAP, x));

subject.pairwise().subscribe(x => output(PAIRS, x));

subject.bufferCount(2, 3).subscribe(x => output(BUFFER, x));

subject.scan((total, value) => total + value).subscribe(x => output(SCAN, x));

subject.mapTo("Boing!!!").subscribe(x => output(BOING, x));