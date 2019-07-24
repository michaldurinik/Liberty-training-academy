package demos.spring.jdbc;

public class Course {
    private String type;
    private String number;
    private String title;

    public Course(String number, String title, String type) {
        super();
        this.type = type;
        this.number = number;
        this.title = title;
    }

    public Course() {
        super();
    }

    public String getType() {
        return type;
    }

    public void setType(String name) {
        this.type = name;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
