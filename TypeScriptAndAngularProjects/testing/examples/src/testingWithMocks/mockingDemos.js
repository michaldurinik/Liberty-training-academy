import {MathType} from "../basicUnitTests/mathType";

describe("Spying on functions", () => {
    it("spying on methods with call through", () => {
        function mathTest(input) {
            const result1 = input.add();
            const result2 = input.subtract();

            return result1 + result2;
        }

        const mathObj = new MathType(34, 12);
        spyOn(mathObj, 'add').and.callThrough();
        spyOn(mathObj, 'subtract')
            .and.callThrough();
        spyOn(mathObj, 'multiply');

        const result = mathTest(mathObj);
        expect(result).toBe(68);
        expect(mathObj.add).toHaveBeenCalled();
        expect(mathObj.subtract).toHaveBeenCalled();
        expect(mathObj.multiply).not.toHaveBeenCalled();
    });

    it("spying on methods altering return values", () => {
        function mathTest(input) {
            const result1 = input.add();
            const result2 = input.subtract();

            return result1 + result2;
        }

        const mathObj = new MathType(34, 12);
        spyOn(mathObj, 'add').and.returnValue(123);
        spyOn(mathObj, 'subtract').and.returnValue(456);
        spyOn(mathObj, 'multiply');

        const result = mathTest(mathObj);
        expect(result).toBe(579);
        expect(mathObj.add).toHaveBeenCalled();
        expect(mathObj.subtract).toHaveBeenCalled();
        expect(mathObj.multiply).not.toHaveBeenCalled();
    });

    it("checking inputs", () => {
        const mathObj = new MathType(34, 12);
        spyOn(mathObj, 'join').and.callThrough();

        const result = mathObj.join('-');
        expect(result).toBe('34-12');
        expect(mathObj.join).toHaveBeenCalledWith('-');
        expect(mathObj.join).not.toHaveBeenCalledWith('#');
    });

    it("replacing a methods implementation", () => {
        const mathObj = new MathType(34, 12);
        let addRetval = 5;
        let subtractRetval = 7;

        spyOn(mathObj, 'add')
            .and.callFake(() => addRetval++);
        spyOn(mathObj, 'subtract')
            .and.callFake(() => subtractRetval--);

        expect(mathObj.add()).toBe(5);
        expect(mathObj.add()).toBe(6);
        expect(mathObj.add()).toBe(7);

        expect(mathObj.subtract()).toBe(7);
        expect(mathObj.subtract()).toBe(6);
        expect(mathObj.subtract()).toBe(5);
    });
});


