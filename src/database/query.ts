import { db_mysql } from "../config/my-sql.config";

db_mysql.connect();
db_mysql.query('ALTER TABLE Cases CHANGE COLUMN users_id users_id VARCHAR(36);');
db_mysql.end();