package demos.spring.webflux.neo4j;

import java.util.List;

public class Neo4JResponse<T> {
    private List<Neo4JResult<T>> results;
    private List<String> errors;

    public Neo4JResponse() {
    }

    public List<Neo4JResult<T>> getResults() {
        return results;
    }

    public void setResults(List<Neo4JResult<T>> results) {
        this.results = results;
    }

    public List<String> getErrors() {
        return errors;
    }

    public void setErrors(List<String> errors) {
        this.errors = errors;
    }
}

