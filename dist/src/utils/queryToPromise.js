"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryToAsync = void 0;
const my_sql_config_1 = require("../config/database/my-sql.config");
function QueryToAsync(sql, values) {
    return new Promise((resolve, reject) => {
        const options = {
            sql,
            values,
            timeout: 90000
        };
        my_sql_config_1.db_mysql.query(options, function (error, results, fields) {
            if (error)
                throw error;
            resolve(JSON.parse(JSON.stringify(results)));
        });
    });
}
exports.QueryToAsync = QueryToAsync;
