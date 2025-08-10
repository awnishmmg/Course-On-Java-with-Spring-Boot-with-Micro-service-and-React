package Helper;

import java.util.*;

public class QueryBuilder {

    private String tableName = "";
    private List<String> selectColumns = new ArrayList<>();
    private List<String> whereConditions = new ArrayList<>();
    private String orderBy = "";
    private String limit = "";
    private Map<String, String> insertValues = new LinkedHashMap<>();
    private Map<String, String> updateValues = new LinkedHashMap<>();
    private String queryType = "";
    
    public QueryBuilder setTable(String tableName) {
        this.tableName = tableName;
        return this;
    }

    // SELECT
    public QueryBuilder select(String... columns) {
        queryType = "SELECT";
        if (columns.length == 0) {
            selectColumns.add("*");
        } else {
            selectColumns.addAll(Arrays.asList(columns));
        }
        return this;
    }

    // WHERE
    public QueryBuilder where(String column, String operator, String value) {
        whereConditions.add(column + " " + operator + " '" + value + "'");
        return this;
    }

    // ORDER BY
    public QueryBuilder orderBy(String column, String direction) {
        this.orderBy = " ORDER BY " + column + " " + direction;
        return this;
    }

    // LIMIT
    public QueryBuilder limit(int limit) {
        this.limit = " LIMIT " + limit;
        return this;
    }

    // INSERT
    public QueryBuilder insert(Map<String, String> values) {
        queryType = "INSERT";
        insertValues.putAll(values);
        return this;
    }

    // UPDATE
    public QueryBuilder update(Map<String, String> values) {
        queryType = "UPDATE";
        updateValues.putAll(values);
        return this;
    }

    // DELETE
    public QueryBuilder delete() {
        queryType = "DELETE";
        return this;
    }

    // Build Query
    public String getQuery() {
        StringBuilder sql = new StringBuilder();

        switch (queryType) {
            case "SELECT":
                sql.append("SELECT ")
                   .append(String.join(", ", selectColumns))
                   .append(" FROM ")
                   .append(tableName);

                if (!whereConditions.isEmpty()) {
                    sql.append(" WHERE ").append(String.join(" AND ", whereConditions));
                }
                if (!orderBy.isEmpty()) sql.append(orderBy);
                if (!limit.isEmpty()) sql.append(limit);
                break;

            case "INSERT":
                String cols = String.join(", ", insertValues.keySet());
                String vals = "'" + String.join("', '", insertValues.values()) + "'";
                sql.append("INSERT INTO ").append(tableName)
                   .append(" (").append(cols).append(") VALUES (").append(vals).append(")");
                break;

            case "UPDATE":
                List<String> setParts = new ArrayList<>();
                for (Map.Entry<String, String> entry : updateValues.entrySet()) {
                    setParts.add(entry.getKey() + "='" + entry.getValue() + "'");
                }
                sql.append("UPDATE ").append(tableName)
                   .append(" SET ").append(String.join(", ", setParts));
                if (!whereConditions.isEmpty()) {
                    sql.append(" WHERE ").append(String.join(" AND ", whereConditions));
                }
                break;

            case "DELETE":
                sql.append("DELETE FROM ").append(tableName);
                if (!whereConditions.isEmpty()) {
                    sql.append(" WHERE ").append(String.join(" AND ", whereConditions));
                }
                break;

            default:
                throw new IllegalStateException("Query type not set!");
        }

        return sql.toString();
    }
}
