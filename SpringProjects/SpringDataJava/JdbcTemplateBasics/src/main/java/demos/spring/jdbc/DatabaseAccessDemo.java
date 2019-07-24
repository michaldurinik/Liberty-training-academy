package demos.spring.jdbc;

import org.junit.After;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;

import java.sql.*;
import java.util.List;
import java.util.Map;

import static demos.spring.jdbc.DatabaseUtils.*;
import static demos.spring.jdbc.SQL.*;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

public class DatabaseAccessDemo {
	private Connection connection;
	private JdbcTemplate template;
	private static ApplicationContext factory;

	private class CourseRowMapping implements RowMapper<Course> {
		public Course mapRow(ResultSet rs, int rowNum) throws SQLException {
			Course course = new Course();
			course.setNumber(rs.getString(1));
			course.setTitle(rs.getString(2));
			course.setType(rs.getString(3));
			return course;
		}
	}
	@BeforeClass
	public static void beforeAll() throws Exception {
		try {
			Driver driver = (Driver)Class.forName(JDBC_DRIVER).newInstance();
			System.out.println("Using driver " + JDBC_DRIVER);
			System.out.println("Version is: " + driver.getMajorVersion() + "." + driver.getMinorVersion());
		} catch(Exception ex) {
			System.out.println("CANNOT START DATABASE BECAUSE " + ex.getMessage());
			throw ex;
		}
		factory = new ClassPathXmlApplicationContext("springConfig.xml");
	}
	@Before
	public void before() throws Exception {
		connection = DriverManager.getConnection(CONNECTION_STRING);
		createCoursesTable(connection);
		populateCoursesTable(connection);
		template = factory.getBean("template",JdbcTemplate.class);
	}
	@After
	public void after() throws Exception {
		removeCoursesTable(connection);
		connection.close();
	}
	@Test
	public void databaseSetupOK() throws SQLException {
		Statement statement = connection.createStatement();
		ResultSet rs = statement.executeQuery(SELECT_ALL_COURSES);
		assertTrue("No first row",rs.next());
		assertEquals("Wrong number of records!",7,rs.getInt(1));
	}
	@Test
	public void loadingListOfBeginnersCourses() {
		List<Course> results = template.query(SELECT_COURSES_BY_TYPE,new CourseRowMapping(),"Beginners");
		assertEquals("Wrong number of results",3,results.size());
		assertEquals("Wrong course number","AB12",results.get(0).getNumber());
		assertEquals("Wrong course number","CD34",results.get(1).getNumber());
		assertEquals("Wrong course number","EF56",results.get(2).getNumber());
	}
	@Test
	public void loadingSingleBeginnersCourse() {
		Course course = template.queryForObject(SELECT_SINGLE_COURSE, new CourseRowMapping(), "IJ90");
		assertEquals("Wrong course number","IJ90",course.getNumber());
		assertEquals("Wrong course title","XPath and XSLT",course.getTitle());
		assertEquals("Wrong course type","Intermediate",course.getType());
	}
	@Test
	public void loadingRowIntoMap() {
		Map<String,Object> resultMap = template.queryForMap(SELECT_SINGLE_COURSE, "IJ90");
		assertEquals("Wrong course number","IJ90",resultMap.get("CourseNum"));
		assertEquals("Wrong course title","XPath and XSLT",resultMap.get("CourseTitle"));
		assertEquals("Wrong course type","Intermediate",resultMap.get("CourseType"));
	}
	@Test
	public void updatingCourse() throws Exception {
		Course course = new Course("IJ90","Mastering Spring","Advanced");
		template.update(UPDATE_COURSE, course.getTitle(),course.getType(),course.getNumber());
		PreparedStatement ps = connection.prepareStatement(SELECT_SINGLE_COURSE);
		ps.setString(1,"IJ90");
		ResultSet rs = ps.executeQuery();
		rs.next();
		assertEquals("Title not changed","Mastering Spring",rs.getString("CourseTitle"));
		assertEquals("Type not changed","Advanced",rs.getString("CourseType"));
		
	}
}
