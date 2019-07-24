package demos.spring.webflux.neo4j;

public class Neo4JResultMeta {
    private String id;
    private String type;
    private boolean deleted;

    public Neo4JResultMeta() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public boolean isDeleted() {
        return deleted;
    }

    public void setDeleted(boolean deleted) {
        this.deleted = deleted;
    }
}
