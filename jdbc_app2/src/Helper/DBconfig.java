package Helper;

public class DBconfig {

    private static final String dbUrl = "jdbc:mysql://localhost:3310/java_college_db";
    private static final String dbUser = "root";
    private static final String dbPassword = "";
    private static final String dbDriver = "com.mysql.cj.jdbc.Driver";

    public static String getDbUrl(){
        return DBconfig.dbUrl;
    }
    public static String getDbUser(){
        return  DBconfig.dbUser;
    }
    public static String getDbPassword(){
       return DBconfig.dbPassword;
    }

    public static String getDbDriver(){
       return DBconfig.dbDriver;
    }
}
