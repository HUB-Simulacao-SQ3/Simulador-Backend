import mysql from 'mysql2';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname + '../../../.env') });

var db_mysql = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT as unknown as number,
  decimalNumbers: true,
  bigNumberStrings: true,
  supportBigNumbers: true
});

(() => {
  db_mysql.connect((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('The db is initialize 🎇');
    }
  });
})()


export { db_mysql }
