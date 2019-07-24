package demos.spring.mvc.myapp;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.List;

@XmlRootElement(name = "listOfCourses")
public class CourseList {
    private List<Course> courses;

    public CourseList() {
    }

    public CourseList(List<Course> courses) {
        this.courses = courses;
    }

    @XmlElement(name = "entry")
    public List<Course> getCourses() {
        return courses;
    }

    public void setCourses(List<Course> courses) {
        this.courses = courses;
    }
}
