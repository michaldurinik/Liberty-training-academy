export function runDemo() {
    const array: any[] = ["abc", 123, "def", 456, "ghi", 789];

    console.log("--- Filtering for numbers ---");
    const numbers = array.filter(value => typeof(value) === "number");
    numbers.forEach(value => console.log(value));

    console.log("--- Filtering for strings ---");
    const strings = array.filter(value => typeof(value) === "string");
    strings.forEach(value => console.log(value));

    console.log("--- Transforming inputs ---");
    const newArray = array.map(value => {
        if (typeof(value) === "string") {
            return value.toUpperCase();
        } else {
            return value * 2;
        }
    });
    newArray.forEach(value => console.log(value));

    console.log("--- Preserving 'this' ---");

    class Foo {
        zed: () => void;
        bar: () => void;
        data = 123;

        constructor() {
            this.bar = function () {
                console.log(this.data);
            };

            this.zed = () => console.log(this.data);
        }

        baz() {
            console.log(this.data);
        }
    }

    let obj = new Foo();
    let f1 = obj.bar;
    let f2 = obj.zed;
    let f3 = obj.baz;
    f1();
    f2();
    f3();
}
