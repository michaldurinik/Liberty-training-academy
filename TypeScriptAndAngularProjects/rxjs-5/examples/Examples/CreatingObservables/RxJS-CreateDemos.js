const outputArea = document.getElementById("output");
function output(text) {
    outputArea.innerHTML += text + "<br/>";
}
function title(text) {
    outputArea.innerHTML += `<hr><h4>${text}</h4>`;
}

title("Create Observables of simply arrays");
Rx.Observable.from(["abc", 123, "def", 456])
    .subscribe(output);

title("Create Observables of number ranges");
Rx.Observable.range(101, 5)
    .subscribe(output);

title("Create Observables using create and function");
Rx.Observable.create(observer => {
        // This is all synchronous
        observer.next("first value");
        observer.next("second value");
        for (let ii = 0; ii < 3; ii++) {
            observer.next(ii)
        }
    })
    .subscribe(output);

title("Create from promise");
var promise = new Promise(resolve =>
        setTimeout(() => {
            resolve("I'll get back to you");
        }, 3000));
Rx.Observable.from(promise)
        .subscribe(output);

promise.then(() => {
    title("Create ticking interval counting up");
    Rx.Observable.interval(1000)
        .map(x => x + " s")
        .take(10)
        .subscribe(output);
});
