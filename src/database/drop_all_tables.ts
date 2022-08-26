import { db_mysql } from "../config/database/my-sql.config";

(async () => {
  db_mysql.connect();
  new Promise(resolve => {
    db_mysql.query(`SELECT * FROM information_schema.tables WHERE table_schema = 'facematching'`, (err, result) => {
      if (err) throw Error('Fail in db_mysql\n' + err);
      var listOfTables = JSON.parse(JSON.stringify(result)) as [];
      if (listOfTables.length === 0) resolve(true);
      listOfTables.forEach((table, index) => {
        db_mysql.query(`DROP TABLE ${table['TABLE_NAME']}`);
        if (index === listOfTables.length - 1) resolve(true)
      });
    })
  }).then(() => {
    db_mysql.end()
    console.log('All tables has deleted 🎆')
  })
})();
