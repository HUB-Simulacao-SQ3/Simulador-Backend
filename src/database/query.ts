import { db_mysql } from "../config/database/my-sql.config";

db_mysql.connect();
// db_mysql.query('ALTER TABLE Cases CHANGE COLUMN users_id users_id VARCHAR(36);');
db_mysql.query('ALTER TABLE Users ADD password VARCHAR(255) NOT NULL;');
db_mysql.end();