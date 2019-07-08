import {PayrollManager} from "./payrollManager";
import {FakeRepository} from "./fakeRepository";
import {Repository} from "./repository";
import {Employee} from "./employee";

describe("Payroll Manager Tests with Redesign", () => {
    let target;
    let repository;

    const stubEmployees = [
        new Employee("Dave", 27, "HR", 24000.0),
        new Employee("Jane", 29, "IT", 36000.0),
        new Employee("Pete", 31, "HR", 48000.0),
        new Employee("Mary", 33, "IT", 60000.0),
    ];

    function stubEmployeesOnRepository() {
        spyOn(repository, 'getAll').and.returnValue(stubEmployees);
    }

    beforeEach(() => {
        repository = new Repository();
        target = new PayrollManager(repository);
    });

    it("Employees can be enrolled", () => {
        spyOn(repository, 'add').and.returnValue("AB12");
        const expectedAddedEmployee = new Employee("Dave", 27, "HR", 24000.0);

        const id = target.enroll("Dave", 27, "HR", 24000.0);

        expect(id).toEqual("AB12");
        expect(repository.add).toHaveBeenCalledWith(expectedAddedEmployee);
    });

    it("Can add multiple employees", () => {
        spyOn(repository, 'add');
        stubEmployees.forEach(x => target.enroll(x.getName(), x.getAge(), x.getDept(), x.getSalary()));

        expect(repository.add.calls.count()).toEqual(4);
    });

    it("Company payroll can be calculated", () => {
        stubEmployeesOnRepository();

        const retval = target.runPayrollForCompany();

        expect(retval).toEqual(14000.0);
        expect(repository.getAll).toHaveBeenCalled();
    });

    it("Dept payroll can be calculated", () => {
        stubEmployeesOnRepository();

        const retval = target.runPayrollForDept("IT");

        expect(retval).toEqual(8000.0);
        expect(repository.getAll).toHaveBeenCalled();
    });

    it("Salaries can be incremented by dept", () => {
        stubEmployeesOnRepository();

        target.adjustSalaryByDept("IT", 1200);

        expect(repository.getAll).toHaveBeenCalled();
        expect(target.runPayrollForDept("IT")).toEqual(8200.0);
    });
});
