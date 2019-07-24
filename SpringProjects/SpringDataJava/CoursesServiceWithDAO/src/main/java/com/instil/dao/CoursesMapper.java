package com.instil.dao;

import com.instil.model.Course;
import com.instil.model.CourseDifficulty;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class CoursesMapper implements RowMapper<Course> {
    @Override
    public Course mapRow(ResultSet rs, int rowNum) throws SQLException {
        String id = rs.getString("CourseNum");
        String title = rs.getString("CourseTitle");
        String type = rs.getString("CourseType");
        CourseDifficulty difficulty = CourseDifficulty.valueOf(type.toUpperCase());
        return new Course(id, title, difficulty);
    }
}
