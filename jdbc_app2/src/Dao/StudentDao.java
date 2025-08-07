package Dao;

import model.Student;

import java.util.List;

public interface StudentDao {
    public abstract Student createStudent(String name,int age);
    public abstract Student getStudentById(int id);
    public abstract void updateStudent(int id,String name, int age);
    public  abstract void deleteStudent(int id);
    public abstract List<Student> getAllStudent();
}
