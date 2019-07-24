package com.instil.dao;

import com.instil.model.Course;

import java.util.Collection;
import java.util.Optional;

public interface CoursesDAO {
    boolean anyExist();

    boolean exists(String id);

    Optional<Course> fetchById(String id);

    Collection<Course> fetchAll();

    void update(Course newCourse);

    void create(Course newCourse);

    void delete(String id);
}
