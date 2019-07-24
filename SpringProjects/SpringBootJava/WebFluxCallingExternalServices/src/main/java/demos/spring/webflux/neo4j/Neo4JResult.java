package demos.spring.webflux.neo4j;

import java.util.List;

public class Neo4JResult<T> {
    private List<String> columns;
    private List<Neo4JResultRow<T>> data;

    public Neo4JResult() {
    }

    public List<String> getColumns() {
        return columns;
    }

    public void setColumns(List<String> columns) {
        this.columns = columns;
    }

    public List<Neo4JResultRow<T>> getData() {
        return data;
    }

    public void setData(List<Neo4JResultRow<T>> data) {
        this.data = data;
    }
}