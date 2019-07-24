package demos.v11;

public class Employee {
    private String name;
    private int yearsService;
    private double salary;
    private double performanceBonus;

    public Employee(String name, int yearsService, double salary, double performanceBonus) {
        super();
        this.name = name;
        this.yearsService = yearsService;
        this.salary = salary;
        this.performanceBonus = performanceBonus;
    }

    public String getName() {
        return name;
    }

    public int getYearsService() {
        return yearsService;
    }

    public double getSalary() {
        return salary;
    }

    public double getPerformanceBonus() {
        return performanceBonus;
    }

    @Override
    public String toString() {
        return "Employee [name=" + name + ", performanceBonus="
                + performanceBonus + ", salary=" + salary + ", yearsService="
                + yearsService + "]";
    }
}
