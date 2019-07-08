export class Employee {
    constructor(name, age, dept, salary) {
        this._name = name;
        this._age = age;
        this._dept = dept;
        this._salary = salary;
    }

    getName() {
        return this._name;
    }

    getAge() {
        return this._age;
    }

    getDept() {
        return this._dept;
    }

    getSalary() {
        return this._salary;
    }

    setSalary(amount) {
        this._salary = amount;
    }
}