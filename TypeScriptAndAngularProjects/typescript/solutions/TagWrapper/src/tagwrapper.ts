type TagWrapper = (transform: () => string, targetElement: () => Element) => void;

function buildTagWrapper(
            contentBuilder: (_: string) => string,
            tagName: string
        ): TagWrapper {
    return (inputBuilder, nodeFinder) => {
        const output = contentBuilder(inputBuilder());
        const parentNode = nodeFinder();
        const newNode = document.createElement(tagName);
        newNode.innerText = output;
        parentNode.appendChild(newNode);
    }
}

function getTargetElement(): HTMLElement | null {
    return document.getElementById("target");
}

function getQuote(): string {
    return "Fortune favors the prepared mind";
}

function toUppercase(input: string): string {
    return input.toUpperCase();
}

function replaceFortuneWithChance(input: string): string {
    return input.replace("Fortune", "Chance");
}

function runDemo(): void {
    const f1 = buildTagWrapper(toUppercase, "h2");
    const f2 = buildTagWrapper(replaceFortuneWithChance, "h3");
    const f3 = buildTagWrapper(s => s, "mark");

    f1(getQuote, getTargetElement);
    f2(getQuote, getTargetElement);
    f3(() => "Exercise complete!", getTargetElement);
}
