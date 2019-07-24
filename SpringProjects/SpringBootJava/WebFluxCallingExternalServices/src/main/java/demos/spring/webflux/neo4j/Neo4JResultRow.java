package demos.spring.webflux.neo4j;

import java.util.List;

public class Neo4JResultRow<T> {
    private List<T> row;
    private List<Neo4JResultMeta> meta;

    public Neo4JResultRow() {
    }

    public List<T> getRow() {
        return row;
    }

    public void setRow(List<T> row) {
        this.row = row;
    }

    public List<Neo4JResultMeta> getMeta() {
        return meta;
    }

    public void setMeta(List<Neo4JResultMeta> meta) {
        this.meta = meta;
    }
}