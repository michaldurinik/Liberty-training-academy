export function runDemo() {
    function display(nodeId: string, value: string) {
        let node = document.getElementById(nodeId);
        node.innerHTML = value;
    }

    let val1 = "abcde";
    let val2 = 1234;
    let val3 = true;

    display("output1",`Values are ${val1}, ${val2} and ${val3}`);
    display("output2",`Values are ${val1.toUpperCase()}, ${val2 * 2} and ${!val3}`);
}