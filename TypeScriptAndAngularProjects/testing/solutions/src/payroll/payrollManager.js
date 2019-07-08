import {Employee} from "./employee";

export class PayrollManager {
    constructor(repository) {
        this._empRepository = repository;
        this._empIds = [];
    }

    enroll(name, age, dept, salary) {
        const id = this._empRepository.add(new Employee(name, age, dept, salary));
        this._empIds.push(id);
        return id;
    }

    runPayrollForCompany() {
        return this._empIds.map(x => this._empRepository.find(x))
            .map(x => x.getSalary() / 12)
            .reduce((total, value) => total + value);
    }

    runPayrollForDept(dept) {
        return this._empIds.map(x => this._empRepository.find(x))
            .filter(x => x.getDept() === dept)
            .map(x => x.getSalary() / 12)
            .reduce((total, value) => total + value);
    }

    adjustSalaryByDept(dept, addition) {
        this._empIds.map(x => this._empRepository.find(x))
            .filter(x => x.getDept() === dept)
            .forEach(emp => {
                const newSalary = emp.getSalary() + addition;
                emp.setSalary(newSalary);
            });
    }
}

