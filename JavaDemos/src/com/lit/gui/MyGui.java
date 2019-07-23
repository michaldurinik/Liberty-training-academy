package com.lit.gui;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class MyGui extends JFrame {
    private class MyListener implements ActionListener {
        @Override
        public void actionPerformed(ActionEvent e) {
            System.out.println("Button Pushed");
            textField.setText(textField.getText() + "ABC");
        }
    }

    private JButton button;
    private JTextField textField;

    public MyGui() {
        super("My Swing GUI");
        setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);

        button = new JButton("Push Me");
        button.addActionListener(new MyListener());
        button.addActionListener(new ActionListener() { //Annonymous Inner Class
            public void actionPerformed(ActionEvent e) {
                textField.setText(textField.getText() + "DE");
            }
        });

        button.addActionListener(e -> textField.setText(textField.getText() + "GHI"));
        button.addActionListener(this::foobar);

        textField = new JTextField(10);

        setLayout(new FlowLayout());
        add(button);
        add(textField);
    }
    private void foobar(ActionEvent e) {
        textField.setText(textField.getText() + "JKL");
    }
}
