import { QueryOptions } from "mysql2";
import { db_mysql } from "../config/my-sql.config";

function QueryToAsync<T, K = any>(sql: string, values?: K): Promise<T> {
  return new Promise((resolve, reject) => {

    const options = {
      sql,
      values,
      timeout: 90000
    } as QueryOptions

    db_mysql.query(options, function (error, results, fields) {
      if (error) throw error;
      resolve(JSON.parse(JSON.stringify(results)) as T);
    });
  })
}

export { QueryToAsync };