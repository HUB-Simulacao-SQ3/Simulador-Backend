"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const my_sql_config_1 = require("../config/database/my-sql.config");
(async () => {
    my_sql_config_1.db_mysql.connect();
    new Promise(resolve => {
        my_sql_config_1.db_mysql.query(`SELECT * FROM information_schema.tables WHERE table_schema = 'facematching'`, (err, result) => {
            if (err)
                throw Error('Fail in db_mysql\n' + err);
            var listOfTables = JSON.parse(JSON.stringify(result));
            if (listOfTables.length === 0)
                resolve(true);
            listOfTables.forEach((table, index) => {
                my_sql_config_1.db_mysql.query(`DROP TABLE ${table['TABLE_NAME']}`);
                if (index === listOfTables.length - 1)
                    resolve(true);
            });
        });
    }).then(() => {
        my_sql_config_1.db_mysql.end();
        console.log('All tables has deleted 🎆');
    });
})();
