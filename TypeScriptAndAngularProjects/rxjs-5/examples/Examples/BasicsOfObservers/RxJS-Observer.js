const data = ["abc", 123, "def", 456];
const outputArea = document.getElementById("output");
function output(text) {
    outputArea.innerHTML += text + "<br/>";
}
function title(text) {
    outputArea.innerHTML += `<hr><h4>${text}</h4>`;
}
function errorOutput(error) {
    output("Error: " + error)
}
function completeOutput() {
    output("Completed stream")
}

title("Using arrow functions for each Observer method");
Rx.Observable.from(data)
    .subscribe(
        value => output(value),
        error => output("Error: " + error),
        () => output("Completed stream"));

title("Using functions for each Observer method");
Rx.Observable.from(data)
    .subscribe(output, errorOutput, completeOutput);

title("Using Observer class");
class MyObserver {
    next(value) {
        output(value);
    }

    error(error) {
        errorOutput(error);
    }

    complete() {
        completeOutput();
    }
}
Rx.Observable.from(data)
    .subscribe(new MyObserver());


title("Seeing error output");
Rx.Observable.create(observer => {
        observer.next(123);
        observer.next(456);
        observer.next(789);
        observer.error("Stream error event");
        // Due to the error the next and complete doing
        //  get emitted
        observer.next(999);
        observer.complete();
    })
    .subscribe(new MyObserver());