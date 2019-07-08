const outputNode = document.getElementById('output');
const nodes = document.querySelectorAll('#input p');
const delayNode = document.stateForm.delay;

function isApplicable(event) {
    var oddOrEven = document.stateForm.paraChoice.value;
    return event.target.getAttribute('class') === oddOrEven;
}
function isRunning() {
    return document.stateForm.enabled.value === 'true';
}
function describe(event) {
    return `Mouse moved to ${ event.clientX }, ${ event.clientY }`;
}
function show(msg) { outputNode.innerHTML = msg; }

// Now the throttle uses an Observable to control the time
// When the passed Observable completes or emits values
// That will release an item on the original Observable
let subscription = Rx.Observable.fromEvent(nodes, 'mousemove')
                                .filter(x => isRunning())
                                .throttle(x => Rx.Observable.timer(delayNode.value))
                                .filter(isApplicable)
                                .map(describe)
                                .subscribe(show);
