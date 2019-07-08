class Pair<T, U> {
    public first: T;
    public second: U;

    constructor(first: T, second: U) {
        this.first = first;
        this.second = second;
    }
}

function displayValues<T, U>(nodeId: string,
                             values: Pair<T, U>[]) {
    let node = document.getElementById(nodeId);
    for (let {first, second} of values) {
        node.innerHTML += `Pair of ${first} and ${second}<br/>`;
    }
}

export function runDemo() {
    let list1: Array<Pair<number, string>> = [];
    let list2: Array<Pair<string, number>> = [];

    list1.push(new Pair(123, "abc"));
    list1.push(new Pair(456, "def"));

    list2.push(new Pair("abc", 123));
    list2.push(new Pair("def", 456));

    displayValues("output1", list1);
    displayValues("output2", list2);
}