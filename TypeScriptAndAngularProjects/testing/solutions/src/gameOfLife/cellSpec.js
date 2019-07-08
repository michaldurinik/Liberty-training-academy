﻿import {GameOfLifeCell} from "./cell";

describe("Testing The Game Of Life Cell", () => {
    let neighbours;
    let target;

    function makeNeighboursAlive(aliveNeighbourIndices) {
        aliveNeighbourIndices.forEach(x => neighbours[x].makeAlive());
    }

    beforeEach(() => {
        neighbours = [
            new GameOfLifeCell([]),
            new GameOfLifeCell([]),
            new GameOfLifeCell([]),
            new GameOfLifeCell([]),
            new GameOfLifeCell([]),
            new GameOfLifeCell([]),
            new GameOfLifeCell([]),
            new GameOfLifeCell([])
        ];

        target = new GameOfLifeCell(neighbours);
    });

    it("Throws when it has too many neighbours", () => {
        neighbours.push(new GameOfLifeCell([]));

        expect(() => new GameOfLifeCell(neighbours)).toThrow();
    });

    it("Is dead by default", () => {
        expect(target.getState()).toEqual("dead");
    });

    it("Can be made alive", () => {
        target.makeAlive();

        expect(target.getState()).toEqual("alive");
    });

    it("Can be made dead", () => {
        target.makeAlive();

        target.makeDead();

        expect(target.getState()).toEqual("dead");
    });


    [[0, 1, 2],
     [3, 5, 6]]
        .forEach(aliveNeighbourIndices =>
    it("Becomes alive when three neighbours are alive - " + aliveNeighbourIndices, () => {
        makeNeighboursAlive(aliveNeighbourIndices);

        target.changeState();

        expect(target.getState()).toEqual("alive");
    }));

    [[],
     [0],
     [1]]
        .forEach(aliveNeighbourIndices =>
    it("Starves when less than two neighbours are alive - " + aliveNeighbourIndices, () => {
        makeNeighboursAlive(aliveNeighbourIndices);
        target.makeAlive();

        target.changeState();

        expect(target.getState()).toEqual("dead");
    }));

    [[0, 1, 2, 3],
     [1, 2, 3, 4],
     [1, 3, 5, 6, 7]]
        .forEach(aliveNeighbourIndices =>
    it("Is overcrowded when more than three neighbours are alive - " + aliveNeighbourIndices, () => {
        makeNeighboursAlive(aliveNeighbourIndices);
        target.makeAlive();

        target.changeState();

        expect(target.getState()).toEqual("dead");
    }));

    [[],
     [1],
     [1, 3],
     [1, 4, 5, 7]]
        .forEach(aliveNeighbourIndices =>
    it("Stays dead unless three neighbours are alive - " + aliveNeighbourIndices, () => {
        makeNeighboursAlive(aliveNeighbourIndices);

        target.changeState();

        expect(target.getState()).toEqual("dead");
    }));


    it("Returns State Async", () => {
        target.makeAlive();

        target.getStateAsync()
            .then(state => expect(state).toEqual('alive'))
    });

    it("Returns State Async - Using async/await syntax", async () => {
        target.makeAlive();

        let state = await target.getStateAsync();

        expect(state).toEqual('alive');
    });
});