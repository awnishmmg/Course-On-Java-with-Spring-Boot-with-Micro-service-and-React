package Helper;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBconnect
{
    //Singelton class
    public static Connection db_instance;

    private DBconnect(){

    }

    public static Connection getDBConnection(){
        if(DBconnect.db_instance == null){

           //Logic
            try {
                Class.forName(DBconfig.getDbDriver());
                System.out.println("Driver Loaded Successfully");
            } catch (ClassNotFoundException e) {
                System.out.println("Driver Connection Error"+e.getMessage());
            }

            //Connection Create
            try {
                DBconnect.db_instance =  DriverManager.getConnection(DBconfig.getDbUrl(), DBconfig.getDbUser(),DBconfig.getDbPassword());
                System.out.println("DB Connected Successfully");
            } catch (SQLException e) {
                System.out.println("Cannot Connect to Database"+e.getMessage());
            }

        }
        return DBconnect.db_instance;
    }

}
