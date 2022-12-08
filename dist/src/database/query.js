"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const my_sql_config_1 = require("../config/database/my-sql.config");
my_sql_config_1.db_mysql.connect();
// db_mysql.query('ALTER TABLE Users CHANGE COLUMN password users_id VARCHAR(36);');
// db_mysql.query('ALTER TABLE Users ADD password VARCHAR(255) NOT NULL;');
my_sql_config_1.db_mysql.end();
