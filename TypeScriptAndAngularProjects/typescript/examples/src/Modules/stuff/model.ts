class MemberOfStaff {
    constructor(public name: string, protected dept: string) {
    }

    calcSalary(): void {
        console.log(`Calculating salary for ${this.name} in ${this.dept}`);
    }

    toString(): string {
        return `${this.name} working in ${this.dept}`
    }
}

export {MemberOfStaff as Employee};

export class Manager extends MemberOfStaff {
    constructor(name: string, dept: string, private budget: number) {
        super(name, dept);
    }

    toString(): string {
        return `${this.name} working in ${this.dept} with budget of ${this.budget}`
    }
}
