package Helper;

import java.sql.Connection;
import java.util.HashMap;

public class QueryBuilder {

    private String tablename="";
    public String sql = "";

    public QueryBuilder setTable(String tablename){
        this.tablename =  tablename;
        return this;
    }

    public boolean insert(HashMap<String,String> kv){

        DBconnect.getDBConnection();
        String sql = "";
        sql = "INSERT INTO "+this.tablename+"";
        String columns = "";
        String values = "";
        for (String key :kv.keySet()){
            columns =  columns + key+",";
        }

        for (String value :kv.values()){
            values =  values + "'"+value+"',";
        }

        //Remove extra part of string
        columns = columns.substring(0,columns.length()-1);
        values = values.substring(0,values.length()-1);

        sql = sql + "("+columns+") values("+values+")";
        System.out.println(sql);
        return true;

    }
}
