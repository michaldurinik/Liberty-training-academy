import {List} from "./list";

describe("List Tests", () => {
    let list;

    function addFiveItems() {
        list.add("abc");
        list.add("def");
        list.add("ghi");
        list.add("jkl");
        list.add("mno");
    }

    beforeEach(() => {
        list = new List();
    });

    it("New list is empty", () => {
        expect(list.isEmpty()).toBeTruthy();
        expect(list.size()).toEqual(0);
    });

    it("List with content has size", () => {
        addFiveItems();

        expect(list.isEmpty()).toBeFalsy();
        expect(list.size()).toEqual(5);
    });

    it("First item can be retrieved", () => {
        list.add("abc");

        expect(list.get(0)).toEqual("abc");
    });

    it("Many items can be retrieved", () => {
        addFiveItems();

        expect(list.get(0)).toEqual("abc");
        expect(list.get(1)).toEqual("def");
        expect(list.get(2)).toEqual("ghi");
        expect(list.get(3)).toEqual("jkl");
        expect(list.get(4)).toEqual("mno");
    });

    it("Can remove item by index", () => {
        addFiveItems();

        list.remove(2);

        expect(list.get(0)).toEqual("abc");
        expect(list.get(1)).toEqual("def");
        expect(list.get(2)).toEqual("jkl");
        expect(list.get(3)).toEqual("mno");
    });

    it("Can remove first item", () => {
        addFiveItems();

        list.remove(0);

        expect(list.get(0)).toEqual("def");
        expect(list.get(1)).toEqual("ghi");
        expect(list.get(2)).toEqual("jkl");
        expect(list.get(3)).toEqual("mno");
    });

    it("Can remove last item", () => {
        addFiveItems();

        list.remove(4);

        expect(list.get(0)).toEqual("abc");
        expect(list.get(1)).toEqual("def");
        expect(list.get(2)).toEqual("ghi");
        expect(list.get(3)).toEqual("jkl");
    });

    it("Size decrements when item removed", () => {
        addFiveItems();

        list.remove(2);

        expect(list.size()).toEqual(4);
    });

    it("Removing last item shows as empty", () => {
        list.add('abc');

        list.remove(0);

        expect(list.isEmpty()).toBeTruthy();
        expect(list.size()).toEqual(0);
    })
});
