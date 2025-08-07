import Helper.QueryBuilder;

import java.sql.Connection;
import java.sql.Driver;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Scanner;

public class App {


    public static void main(String[] args) {
//        String name;
//        int age;
//        System.out.println("Main Execution");
//
//        Scanner sc = new Scanner(System.in);
//        System.out.println("Enter the name:");
//        name = sc.nextLine().trim();
//
//        System.out.println("Enter the age:");
//        age = sc.nextInt();
        HashMap<String,String> std = new HashMap<>();
        HashMap<String,String> pd = new HashMap<>();
        QueryBuilder qb = new QueryBuilder();

        std.put("name","Awnish");
        std.put("age","28");
        std.put("marks","100");

        pd.put("product_name","Maggie");
        pd.put("product_qty","5");
        pd.put("category","food");
        pd.put("price","15");
        pd.put("brand","nestle");
        pd.put("discount","5");

        System.out.println(qb.setTable("Student").insert(std));
        System.out.println(qb.setTable("Product").insert(pd));





    }
}
