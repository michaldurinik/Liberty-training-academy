import {MathType} from "./mathType";

describe("Math Type", () => {
    let mathObj;

    beforeEach(() => {
        mathObj = new MathType(34, 12);
    });

    it("performs addition", () => {
        expect(mathObj.add()).toEqual(46);
    });

    it("performs subtraction", () => {
        expect(mathObj.subtract()).toEqual(22);
    });

    it("performs multiplication", () => {
        expect(mathObj.multiply()).toEqual(408);
    });
});
