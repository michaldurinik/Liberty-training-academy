package demos.spring.mvc.myapp;

import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/courses")
public class CoursesController {
    @RequestMapping(method = RequestMethod.GET, produces = "application/xml")
    public CourseList viewAllAsXml() {
        List<Course> retval = new ArrayList<Course>(portfolio.values());
        return new CourseList(retval);
    }

    @RequestMapping(method = RequestMethod.GET, produces = "application/json")
    public List<Course> viewAllAsJson() {
        List<Course> retval = new ArrayList<Course>(portfolio.values());
        return retval;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT, consumes = "application/json")
    public Course addOrUpdateCourseViaJson(@RequestBody Course newCourse) {
        portfolio.put(newCourse.getId(), newCourse);
        return newCourse;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT, consumes = "application/xml")
    public String addOrUpdateCourseViaXml(@RequestBody Course newCourse) {
        portfolio.put(newCourse.getId(), newCourse);
        return newCourse.getId();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET, produces = "application/json")
    public Course fetchCourseDetailsAsJson(@PathVariable("id") String id) {
        return portfolio.get(id);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET, produces = "application/xml")
    public Course fetchCourseDetailsAsXml(@PathVariable("id") String id) {
        return portfolio.get(id);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteACourse(@PathVariable("id") String id) {
        portfolio.remove(id);
    }

    @Resource(name = "portfolio")
    public void setPortfolio(Map<String, Course> portfolio) {
        this.portfolio = portfolio;
    }

    private Map<String, Course> portfolio;
}
