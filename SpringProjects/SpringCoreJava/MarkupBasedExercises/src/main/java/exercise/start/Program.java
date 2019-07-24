package exercise.start;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import javax.swing.*;

public class Program {
    private static AbstractApplicationContext buildContext() {
        return new ClassPathXmlApplicationContext("exerciseStart.xml");
    }

    public static void main(String[] args) throws Exception {
        ApplicationContext context = buildContext();
        JFrame gui = context.getBean("gui", JFrame.class);
        gui.setVisible(true);
    }
}
