package game.of.life.finish;

import java.util.List;
import java.util.stream.Collectors;

import static game.of.life.finish.CellState.ALIVE;
import static game.of.life.finish.CellState.DEAD;

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
        long aliveNeighbours = countAliveNeighbours();
        CellState result = DEAD;
        if (state == DEAD && aliveNeighbours == 3) {
            result = ALIVE;
        } else if (state == ALIVE) {
            if (aliveNeighbours == 2 || aliveNeighbours == 3) {
                result = ALIVE;
            }
        }
        state = result;
    }

    private long countAliveNeighbours() {
        return neighbours.stream()
                .filter(Cell::isAlive)
                .collect(Collectors.counting());
    }

    public boolean isAlive() {
        return state == ALIVE;
    }

    public boolean isDead() {
        return state == DEAD;
    }
}