class Node {
    constructor(next, previous, item) {
        this._next = next;
        this._previous = previous;
        this._item = item;
    }

    getNext() {
        return this._next;
    }

    setNext(node) {
        this._next = node;
    }

    getPrevious() {
        return this._previous;
    }

    setPrevious(node) {
        this._previous = node;
    }

    getItem() {
        return this._item;
    }
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
        } else {
            const last = this.walkToEnd();
            last.setNext(new Node(null, last, item));
        }
        this._size++;
    }

    walkToEnd() {
        let current = this._first;
        while (current.getNext() !== null) {
            current = current.getNext();
        }
        return current;
    }

    get(index) {
        return this.walkToNodeByIndex(index).getItem();
    }

    walkToNodeByIndex(index) {
        let current = this._first;
        for (let x = 0; x < index; x++) {
            current = current.getNext();
        }
        return current;
    }

    _reassignPrevious(node) {
        const previous = node.getPrevious();
        const next = node.getNext();
        if (previous) {
            previous.setNext(next);
        }
        else {
            this._first = next;
        }
    }

    _reassignNext(node) {
        const previous = node.getPrevious();
        const next = node.getNext();

        if (next) {
            next.setPrevious(previous);
        }
        else if (previous) {
            previous.setNext(null);
        }
    }

    remove(index) {
        const node = this.walkToNodeByIndex(index);
        this._reassignPrevious(node);
        this._reassignNext(node);
        this._size--;
    }
}
