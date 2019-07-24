package demos.spring.reactive.service;

import demos.spring.reactive.model.Course;
import demos.spring.reactive.model.CourseList;
import demos.spring.reactive.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.ArrayList;

@RestController
public class CourseController {
    private CourseRepository repository;

    @Autowired
    public void setRepository(CourseRepository repository) {
        this.repository = repository;
    }

    @GetMapping(value = "/courses", produces = "application/json")
    public Flux<Course> fetchAllTheCoursesAsJSON() {
        return repository.allCourses();
    }

    @GetMapping(value = "/courses", produces = "application/xml")
    public Mono<CourseList> fetchAllTheCoursesAsXML() {
        CourseList courses = new CourseList(new ArrayList<>());
        return repository.allCourses()
                .reduce(courses, (a, b) -> a.add(b));
    }

    @GetMapping("/courses/{id}")
    public Mono<Course> findById(@PathVariable String id) {
        return this.repository.singleCourse(id);
    }

    @PutMapping("/courses")
    Mono<Void> addOrUpdate(@RequestBody Mono<Course> courseStream) {
        return this.repository.addOrUpdateCourse(courseStream).then();
    }
}
