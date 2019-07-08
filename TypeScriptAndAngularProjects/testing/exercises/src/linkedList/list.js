class Node {
    constructor(next, previous, item) {
        this._next = next;
        this._previous = previous;
        this._item = item;
    }

    getNext() { return this._next; }

    setNext(node) { this._next = node; }

    getPrevious() { return this._previous; }

    setPrevious(node) { this._previous = node; }

    getItem() { return this._item; }
}

export class List {
    constructor() {
        this._size = 0;
        this._first = null;
    }

    isEmpty() {
        return this._size === 0;
    }

    size() {
        return this._size;
    }

    add(item) {
        if (this.isEmpty()) {
            this._first = new Node(null, null, item);
        }
        this._size++;
    }

    get(index) {
        if (index === 0) {
            return this._first.getItem();
        }
        return "";
    }
}
