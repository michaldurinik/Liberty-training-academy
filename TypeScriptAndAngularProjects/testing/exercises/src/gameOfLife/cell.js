export class GameOfLifeCell {

    constructor(neighbours) {
        if (!(this instanceof GameOfLifeCell)) {
            return new GameOfLifeCell(neighbours);
        }
        const numNeighbours = neighbours.length;
        if (numNeighbours > 8) {
            throw "Too many neighbours";
        }
        this._neighbours = neighbours;
        this._state = "dead";
    }

    toString() {
        return "A Game Of Life Cell";
    }

    getState() {
        return this._state;
    }

    makeDead() {
        this._state = "dead";
    }

    makeAlive() {
        this._state = "alive";
    }

    changeState() {
        function countAliveNeighbours(neighbours) {
            var count = 0;
            neighbours.forEach(function (item) {
                if (item.getState() === "alive") {
                    count++;
                }
            });
            return count;
        }

        var count = countAliveNeighbours(this._neighbours);
        if (this._state === "dead") {
            if (count === 3) {
                this.makeAlive();
            }
        } else if (this._state === "alive") {
            if (count > 3 || count < 2) {
                this.makeDead();
            }
        }
    }
}