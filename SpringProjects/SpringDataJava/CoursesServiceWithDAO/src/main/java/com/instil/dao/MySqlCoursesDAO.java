package com.instil.dao;

import com.instil.model.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Component
public class MySqlCoursesDAO implements CoursesDAO {
    @Autowired
    private JdbcTemplate template;

    @Override
    public boolean anyExist() {
        String query = "SELECT COUNT(*) FROM Courses";
        int result = template.queryForObject(query, Integer.class);
        return result > 0;
    }

    @Override
    public boolean exists(String id) {
        String query = "SELECT COUNT(*) FROM Courses WHERE CourseNum = ?";
        Object[] args = {id};
        int result = template.queryForObject(query, args, Integer.class);
        return result == 1;
    }

    @Override
    public Optional<Course> fetchById(String id) {
        CoursesMapper mapper = new CoursesMapper();
        String query = "SELECT * FROM Courses WHERE CourseNum = ?";
        Object[] args = {id};

        List<Course> results = template.query(query, args, mapper);
        if(results.isEmpty()) {
            return Optional.empty();
        } else {
            return Optional.of(results.get(0));
        }
    }

    @Override
    public Collection<Course> fetchAll() {
        CoursesMapper mapper = new CoursesMapper();
        return template.query("SELECT * FROM Courses", mapper);
    }

    @Override
    public void update(Course course) {
        String update = "UPDATE Courses SET CourseTitle = ?, CourseType = ? WHERE CourseNum = ?";
        template.update(
                update,
                course.getTitle(),
                course.getDifficulty().toString(),
                course.getId());
    }

    @Override
    public void create(Course course) {
        String insert = "INSERT INTO Courses (CourseNum, CourseTitle, CourseType) VALUES (?,?,?)";
        template.update(insert,
                course.getTitle(),
                course.getDifficulty().toString(),
                course.getId());
    }

    @Override
    public void delete(String id) {
        String delete = "DELETE FROM Courses WHERE CourseNum = ?";
        template.update(delete, id);
    }
}
