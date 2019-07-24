package demos.spring.reactive.model;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.List;

@XmlRootElement(name = "instilCourses")
public class CourseList {
    private List<Course> courses;

    public CourseList() {
    }

    public CourseList(List<Course> courses) {
        this.courses = courses;
    }

    @XmlElement(name = "greatCourse")
    public List<Course> getCourses() {
        return courses;
    }

    public void setCourses(List<Course> courses) {
        this.courses = courses;
    }

    public CourseList add(Course course) {
        courses.add(course);
        return this;
    }
}
