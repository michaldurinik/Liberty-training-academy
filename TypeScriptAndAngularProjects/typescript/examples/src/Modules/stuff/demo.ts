import {Employee, Manager} from "./model"

export default function demo() {
    function wrapInH2(text: string) {
        let node = document.createElement("h2");
        node.innerText = text;
        return node;
    }

    let emp = new Employee("Dave", "HR");
    let mgr = new Manager("Jane", "IT", 250000.0);
    let domNode = document.getElementById("target");
    domNode.appendChild(wrapInH2(emp.toString()));
    domNode.appendChild(wrapInH2(mgr.toString()));
}
