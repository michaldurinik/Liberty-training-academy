const outputArea = document.getElementById("output");
function output(text) {
    outputArea.innerHTML += text + "<br/>";
}

// We can use Observables synchronously
// We can pass any array like object
// Such as generators, arrays etc.
function* fibonacci() {
    yield 1;
    yield 1;
    let [penultimate, ultimate] = [1, 1];
    while (true) {
        const next = penultimate + ultimate;
        yield next;
        [penultimate, ultimate] = [ultimate, next];
    }
}

const subscription = Rx.Observable.from(fibonacci())
    .filter(x => x % 2 == 0)
    .take(10)
    .subscribe(output);

// Use a different mechanism since every 3rd element
// will be even
const subscription2 = Rx.Observable.from(fibonacci())
    .skip(2)
    .bufferCount(1, 3)
    .take(10)
    .subscribe(output);

// Generate asynchronously using create
function fibonacciAsync(observer) {
    function generateNextValue() {
        let nextValue = sequence.next().value;
        observer.next(nextValue);
        setTimeout(generateNextValue, 1000);
    }

    const sequence = fibonacci();
    generateNextValue();
}

const subscription3 = Rx.Observable.create(fibonacciAsync)
    .filter(x => x % 2 == 0)
    .take(10)
    .subscribe(output);


