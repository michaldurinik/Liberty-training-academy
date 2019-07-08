export class MathType {
    constructor(no1, no2) {
        this.no1 = no1;
        this.no2 = no2;
    }

    add() {
        return this.no1 + this.no2;
    }

    subtract() {
        return this.no1 - this.no2;
    }

    multiply() {
        return this.no1 * this.no2;
    }

    join(spacer) {
        return this.no1 + spacer + this.no2;
    }
}
