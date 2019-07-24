package demos.spring.reactive.repository;

import demos.spring.reactive.model.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.List;
import java.util.Optional;

@Component
public class CourseRepositoryImpl implements CourseRepository {
    private List<Course> portfolio;

    @Autowired
    public CourseRepositoryImpl(@Qualifier("portfolio") List<Course> portfolio) {
        this.portfolio = portfolio;
    }

    public Mono<Course> singleCourse(String id) {
        Optional<Course> selected = portfolio.stream()
                .filter(c -> c.getId().equals(id))
                .findAny();
        return Mono.justOrEmpty(selected);
    }

    public Flux<Course> allCourses() {
        return Flux.fromIterable(portfolio);
    }

    public Mono<Void> addOrUpdateCourse(Mono<Course> mono) {
        return mono.flatMap(this::adder);
    }

    private Mono<Void> adder(Course course) {
        if (portfolio.contains(course)) {
            portfolio.remove(course);
        }
        portfolio.add(course);
        return Mono.empty();
    }
}
