package demos.spring.jdbc;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;

import static demos.spring.jdbc.SQL.*;

class DatabaseUtils {
    static void createCoursesTable(Connection connection) throws SQLException {
        Statement statement = connection.createStatement();
        statement.executeUpdate(CREATE_COURSES_TABLE);
    }

    static void removeCoursesTable(Connection connection) throws SQLException {
        Statement statement = connection.createStatement();
        statement.executeUpdate(DROP_COURSES_TABLE);
    }

    static void populateCoursesTable(Connection connection) throws SQLException {
        addCourseToDB(connection, "AB12", "Intro To C++", "Beginners");
        addCourseToDB(connection, "CD34", "Intro To C#", "Beginners");
        addCourseToDB(connection, "EF56", "Intro To Java", "Beginners");
        addCourseToDB(connection, "GH78", "Programming in IL", "Intermediate");
        addCourseToDB(connection, "IJ90", "XPath and XSLT", "Intermediate");
        addCourseToDB(connection, "KL12", "Enterprise JavaBeans", "Advanced");
        addCourseToDB(connection, "MN34", "Designing .NET Apps", "Advanced");
    }

    static void addCourseToDB(Connection connection, String num, String title, String type) throws SQLException {
        PreparedStatement statement = connection.prepareStatement(INSERT_COURSE);
        statement.setString(1, num);
        statement.setString(2, title);
        statement.setString(3, type);
        statement.executeUpdate();
    }
}
