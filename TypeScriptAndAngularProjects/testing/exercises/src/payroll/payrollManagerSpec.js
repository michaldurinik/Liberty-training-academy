import {PayrollManager} from "./payrollManager";
import {Repository} from "./repository";

describe("Payroll Manager Tests", () => {
    let manager;
    let repository;

    beforeEach(() => {
        repository = new Repository();
        manager = new PayrollManager(repository);
    });

    it("Dummy Test", () => {
        expect(manager).toBeDefined();
    });
});
