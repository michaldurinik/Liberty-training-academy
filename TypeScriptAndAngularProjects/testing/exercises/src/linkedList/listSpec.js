import {List} from "./list";

describe("List Tests", () => {
    let target;

    function addFiveItems() {
        target.add("abc");
        target.add("def");
        target.add("ghi");
        target.add("jkl");
        target.add("mno");
    }

    beforeEach(() => {
        target = new List();
    });

    it("New list is empty", () => {
        expect(target.isEmpty()).toBeTruthy();
        expect(target.size()).toEqual(0);
    });

    it("List with content has size", () => {
        addFiveItems();

        expect(target.isEmpty()).toBeFalsy();
        expect(target.size()).toEqual(5);
    });

    it("First item can be retrieved", () => {
        target.add("abc");

        expect(target.get(0)).toEqual("abc");
    });

    xit("Many items can be retrieved", () => {
        addFiveItems();

        expect(target.get(0)).toEqual("abc");
        expect(target.get(1)).toEqual("def");
        expect(target.get(2)).toEqual("ghi");
        expect(target.get(3)).toEqual("jkl");
        expect(target.get(4)).toEqual("mno");
    });
});
