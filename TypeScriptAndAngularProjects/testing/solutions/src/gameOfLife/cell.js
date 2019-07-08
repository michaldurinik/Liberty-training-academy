export class GameOfLifeCell {
    constructor(neighbours) {
        const numNeighbours = neighbours.length;
        if (numNeighbours > 8) {
            throw "Too many neighbours";
        }
        this._neighbours = neighbours;
        this._state = "dead";
    }

    makeDead() {
        this._state = "dead";
    }

    getState() {
        return this._state;
    }

    changeState() {
        const aliveNeighbourCount = this._aliveNeighbours;

        if (this._state === "dead" && aliveNeighbourCount === 3) {
            this.makeAlive();
        }
        else if (this._state === "alive" &&
                 (aliveNeighbourCount > 3 || aliveNeighbourCount < 2)) {
            this.makeDead();
        }
    }

    toString() {
        return "A Game Of Life Cell";
    }

    makeAlive() {
        this._state = "alive";
    }

    get _aliveNeighbours() {
        return this._neighbours.filter(x => x.getState() === "alive").length;
    }

    getStateAsync() {
        return new Promise((resolve) => {
           setTimeout(() => resolve(this.getState()), 1000);
        });
    }
}