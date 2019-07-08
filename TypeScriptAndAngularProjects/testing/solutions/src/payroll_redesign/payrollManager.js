import {Employee} from "./employee";

export class PayrollManager {
    constructor(repository) {
        this._empRepository = repository;
    }

    enroll(name, age, dept, salary) {
        return this._empRepository.add(new Employee(name, age, dept, salary));
    }

    runPayrollForCompany() {
        return this._empRepository.getAll()
            .map(x => x.getSalary() / 12)
            .reduce((total, value) => total + value);
    }

    runPayrollForDept(dept) {
        return this._empRepository.getAll()
            .filter(x => x.getDept() === dept)
            .map(x => x.getSalary() / 12)
            .reduce((total, value) => total + value);
    }

    adjustSalaryByDept(dept, addition) {
        this._empRepository.getAll()
            .filter(x => x.getDept() === dept)
            .forEach(emp => {
                const newSalary = emp.getSalary() + addition;
                emp.setSalary(newSalary);
            });
    }
}

