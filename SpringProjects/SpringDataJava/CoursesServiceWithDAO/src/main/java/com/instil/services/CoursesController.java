package com.instil.services;

import com.instil.model.Course;
import com.instil.model.CourseDifficulty;
import com.instil.dao.CoursesDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

import static org.springframework.http.HttpStatus.*;

@RestController
@RequestMapping("/courses")
public class CoursesController {
    @Autowired
    private CoursesDAO dao;

    @GetMapping(produces = "application/json")
    public ResponseEntity<Collection<Course>> viewAllAsJson(@RequestParam("type") Optional<CourseDifficulty> type) {
        if (dao.anyExist()) {
            Collection<Course> courses = dao.fetchAll();
            type.ifPresent(t -> courses.removeIf(c -> !c.getDifficulty().equals(t)));
            return ResponseEntity.ok(courses);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @ResponseStatus(NO_CONTENT)
    @PutMapping(value = "/{id}", consumes = "application/json")
    public void addOrUpdateCourseViaJson(@RequestBody Course newCourse) {
        if (dao.exists(newCourse.getId())) {
            dao.update(newCourse);
        } else {
            dao.create(newCourse);
        }
    }

    @GetMapping(value = "/{id}", produces = "application/json")
    public ResponseEntity<Course> fetchCourseDetailsAsJson(@PathVariable("id") String id) {
        Optional<Course> result = dao.fetchById(id);
        return result
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<String> deleteACourse(@PathVariable("id") String id) {
        if (dao.exists(id)) {
            dao.delete(id);
            return ResponseEntity.ok("[\"Removed " + id + "\"]");
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
