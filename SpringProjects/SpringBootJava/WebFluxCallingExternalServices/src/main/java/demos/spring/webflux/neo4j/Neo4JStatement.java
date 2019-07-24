package demos.spring.webflux.neo4j;

public class Neo4JStatement {
    private String statement;

    public Neo4JStatement(String statement) {
        this.statement = statement;
    }

    public String getStatement() {
        return statement;
    }

    public void setStatement(String statement) {
        this.statement = statement;
    }
}
