
function buildTagWrapper(contentBuilder, tagName) {
    return function(inputBuilder, nodeFinder) {
        var output = contentBuilder(inputBuilder());
        var parentNode = nodeFinder();
        var newNode = document.createElement(tagName);
        newNode.innerText = output;
        parentNode.appendChild(newNode);
    }
}

function foo() {
    return document.getElementById("target");
}

function bar() {
    return "Fortune favors the prepared mind";
}

function wibble(input) {
    return input.toUpperCase();
}

function wobble(input) {
    return input.replace("Fortune","Chance");
}

function runDemo() {
    var f1 = buildTagWrapper(wibble,"h2");
    var f2 = buildTagWrapper(wobble,"h3");

    f1(bar,foo);
    f2(bar,foo);
}
