export function runDemo() {
    function displayValues(nodeId: string, ...values: any[]) {
        let node = document.getElementById(nodeId);
        for (let x of values) {
            node.innerHTML = node.innerHTML + x + "<br/>";
        }
    }

    let array = ["abc", 123, "def", 456];
    let object = {
        property1: "wibble",
        property2: 12345,
        property3: "wobble",
        property4: 67890
    };

    let [var1, var2, var3, var4] = array;
    let [var5, var6, ...var7] = array;

    displayValues('output1', var1, var2, var3, var4, var5, var6, var7);

    let {property1, property2, property3, property4} = object;
    let {
        property1: var8, property2: var9,
        property3: var10, property4: var11
    } = object;

    displayValues('output2', property1, property2, property3,
        property4, var8, var9, var10, var11);
}