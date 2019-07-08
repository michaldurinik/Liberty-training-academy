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
        let amount = 0;
        for (let x = 0; x < this._empIds.length; x++) {
            const id = this._empIds[x];
            const emp = this._empRepository.find(id);
            amount += emp.getSalary() / 12;
        }
        return amount;
    }

    runPayrollForDept(dept) {
        let amount = 0;
        for (let x = 0; x < this._empIds.length; x++) {
            const id = this._empIds[x];
            const emp = this._empRepository.find(id);
            if (emp.getDept() === dept) {
                amount += emp.getSalary() / 12;
            }
        }
        return amount;
    }

    adjustSalaryByDept(dept, addition) {
        for (let x = 0; x < this._empIds.length; x++) {
            const id = this._empIds[x];
            const emp = this._empRepository.find(id);
            if (emp.getDept() === dept) {
                const newSalary = emp.getSalary() + addition;
                emp.setSalary(newSalary);
            }
        }
    }
}

