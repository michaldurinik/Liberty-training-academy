package demos.spring.jdbc;

public class SQL {
	static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";
	static final String CONNECTION_STRING = "jdbc:mysql://localhost/CoursesDB?user=root&password=password";
	
	static final String CREATE_COURSES_TABLE = "CREATE TABLE Courses(CourseNum VARCHAR(10) PRIMARY KEY, CourseTitle VARCHAR(30), CourseType VARCHAR(15))";
	static final String DROP_COURSES_TABLE = "DROP TABLE Courses";
	static final String INSERT_COURSE = "INSERT INTO Courses (CourseNum, CourseTitle, CourseType) VALUES (?,?,?)";
	static final String UPDATE_COURSE = "UPDATE Courses SET CourseTitle = ?, CourseType = ? WHERE CourseNum = ?";
	static final String SELECT_ALL_COURSES = "SELECT COUNT(*) FROM Courses";
	static final String SELECT_BEGINNERS_COURSES = "SELECT * FROM Courses WHERE CourseType = 'Beginners'";
	static final String SELECT_COURSES_BY_TYPE = "SELECT * FROM Courses WHERE CourseType = ?";
	static final String SELECT_SINGLE_COURSE = "SELECT * FROM Courses WHERE CourseNum = ?";
	static final String SELECT_SINGLE_COURSE_FOR_UPDATE = "SELECT * FROM Courses WHERE CourseNum = ? FOR UPDATE";
}
