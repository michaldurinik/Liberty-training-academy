const outputAreas = [
    document.getElementById("source"),
    document.getElementById("even"),
    document.getElementById("skip"),
    document.getElementById("audit"),
    document.getElementById("throttle"),
    document.getElementById("debounce")
];
const SOURCE = 0, EVEN = 1, SKIP = 2;
const AUDIT = 3, THROTTLE = 4, DEBOUNCE = 5;

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
        setTimeout(generateNextValue, 500 + (500 * (counter % 5)));
    }

    let counter = 1;
    generateNextValue();
}

let sourceObservable = Rx.Observable.create(asyncSequence);
sourceObservable.subscribe(x => output(SOURCE, x));

let evenObservable = sourceObservable.filter(x => x % 2 == 0);
evenObservable.subscribe(x => output(EVEN, x));

evenObservable.skip(4).subscribe(x => output(SKIP, x));

sourceObservable.throttleTime(2000).subscribe(x => output(THROTTLE, x));

sourceObservable.auditTime(2000).subscribe(x => output(AUDIT, x));

sourceObservable.debounceTime(2000).subscribe(x => output(DEBOUNCE, x));