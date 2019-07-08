import {PayrollManager} from "./payrollManager";
import {FakeRepository} from "./fakeRepository";
import {Repository} from "./repository";
import {Employee} from "./employee";

describe("Payroll Manager Tests", () => {
    let manager;
    let repository;

    function enrollFourEmployees() {
        manager.enroll("Dave", 27, "HR", 24000.0);
        manager.enroll("Jane", 29, "IT", 36000.0);
        manager.enroll("Pete", 31, "HR", 48000.0);
        manager.enroll("Mary", 33, "IT", 60000.0);
    }

    beforeEach(() => {
        repository = new Repository();
        manager = new PayrollManager(repository);
    });

    it("Employees can be enrolled", () => {
        spyOn(repository, 'add').and.returnValue("AB12");
        const expectedAddedEmployee = new Employee("Dave", 27, "HR", 24000.0);

        const id = manager.enroll("Dave", 27, "HR", 24000.0);

        expect(id).toEqual("AB12");
        expect(repository.add).toHaveBeenCalledWith(expectedAddedEmployee);
    });

    it("Can add multiple employees", () => {
        const fakeRepo = new FakeRepository(repository);

        enrollFourEmployees();

        expect(repository.add.calls.count()).toEqual(4);
    });

    it("Company payroll can be calculated", () => {
        const fakeRepo = new FakeRepository(repository);
        enrollFourEmployees();

        const retval = manager.runPayrollForCompany();

        expect(retval).toEqual(14000.0);
        expect(repository.find.calls.count()).toEqual(4);
    });

    it("Dept payroll can be calculated", () => {
        const fakeRepo = new FakeRepository(repository);
        enrollFourEmployees();

        const retval = manager.runPayrollForDept("IT");

        expect(retval).toEqual(8000.0);
        expect(repository.find.calls.count()).toEqual(4);
    });

    it("Salaries can be incremented by dept", () => {
        const fakeRepo = new FakeRepository(repository);
        enrollFourEmployees();

        manager.adjustSalaryByDept("IT", 1200);

        expect(repository.find.calls.count()).toEqual(4);
        expect(manager.runPayrollForDept("IT")).toEqual(8200.0);
    });
});
