interface StaffMember {
    name: string;
    age: number;
    salary: number;
    dept?: string,
    awardBonus: (bonus: number) => void;
}

class Employee implements StaffMember {
    constructor(public name: string, public age: number, public salary: number) {
    }

    awardBonus(bonus: number) {
        this.salary += bonus;
    }

    toString() {
        return this.name + " of age " + this.age + " earning " + this.salary;
    }
}

export function runDemo() {
    function awardBonusAndPrint(person: StaffMember, nodeId: string) {
        person.awardBonus(750);

        let domNode = document.getElementById(nodeId);
        domNode.innerHTML = person.toString();
    }

    const staff1 = new Employee("Joe Bloggs", 27, 30000.0);
    const staff2 = {
        name: "Jane Smith",
        age: 32,
        salary: 40000.0,
        dept: "IT",
        awardBonus: function (bonus: number) {
            this.salary += bonus;
        },
        toString: function () {
            return `${this.name} from ${this.dept} aged ${this.age} earning ${this.salary}`
        },
    };

    awardBonusAndPrint(staff1, "output1");
    awardBonusAndPrint(staff2, "output2");
}