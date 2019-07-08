export function runDemo() {
    let array = ["abc", 123, "def", 456];

    console.log("--- Original array ---");
    console.log(array);

    console.log("--- For..in loop ---");
    for (let index in array) {
        console.log(index);
    }

    console.log("--- For..of loop ---");
    for (let value of array) {
        console.log(value);
    }
}
