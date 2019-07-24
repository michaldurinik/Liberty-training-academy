package demos.spring.webflux.neo4j;

import java.util.List;

public class Neo4JStatementList {
    private List<Neo4JStatement> statements;

    public Neo4JStatementList(List<Neo4JStatement> statements) {
        this.statements = statements;
    }

    public List<Neo4JStatement> getStatements() {
        return statements;
    }

    public void setStatements(List<Neo4JStatement> statements) {
        this.statements = statements;
    }
}