package Dao;

import Helper.DBconfig;
import Helper.DBconnect;
import model.Student;


import java.util.List;

public class StudentDaoImplement  implements  StudentDao{

    @Override
    public Student createStudent(String name, int age) {
//
//        String sql = "INSERT INTO STUDENT"
//        DBconnect.getDBConnection().prepareStatement()
        return null;
    }

    @Override
    public Student getStudentById(int id) {
        return null;
    }

    @Override
    public void updateStudent(int id, String name, int age) {

    }

    @Override
    public void deleteStudent(int id) {

    }

    @Override
    public List<Student> getAllStudent() {
        return List.of();
    }
}
