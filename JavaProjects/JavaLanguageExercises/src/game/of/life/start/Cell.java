package game.of.life.start;

import java.util.List;

import static game.of.life.start.CellState.ALIVE;
import static game.of.life.start.CellState.DEAD;

public class Cell {
    private List<Cell> neighbours;
    private CellState state;

    public Cell(List<Cell> neighbours) {
        super();
        state = DEAD;
        this.neighbours = neighbours;
        if (neighbours.size() > 8) {
            throw new IllegalStateException();
        }
    }

    public void makeAlive() {
        setState(ALIVE);
    }

    public void makeDead() {
        setState(DEAD);
    }

    private void setState(CellState newState) {
        state = newState;
    }

    public void addNeighbour(Cell neighbour) {
        if (neighbours.size() == 8) {
            throw new IllegalStateException();
        }
        neighbours.add(neighbour);
    }

    public void changeState() {
        CellState result;
        int aliveNeighbours = 0;
        for (Cell c : neighbours) {
            if (c.state == ALIVE) {
                aliveNeighbours++;
            }
        }
        if (state == DEAD && aliveNeighbours == 3) {
            result = ALIVE;
        } else if (state == ALIVE && (aliveNeighbours == 2 || aliveNeighbours == 3)) {
            result = ALIVE;
        } else {
            result = DEAD;
        }
        state = result;
    }

    public boolean isAlive() {
        return state == ALIVE;
    }

    public boolean isDead() {
        return state == DEAD;
    }
}