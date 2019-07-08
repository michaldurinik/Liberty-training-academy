export class FakeRepository {
    constructor(repository) {
        this.data = {};
        this.add = this.add.bind(this);
        this.find = this.find.bind(this);

        this.repository = repository;
        spyOn(this.repository, 'add').and.callFake(this.add);
        spyOn(this.repository, 'find').and.callFake(this.find);
    }

    add(emp) {
        this.data[emp.getName()] = emp;
        return emp.getName();
    }

    find(id) {
        return this.data[id];
    }
}
