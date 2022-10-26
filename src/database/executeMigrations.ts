import fs from 'fs';
import { readFileSync } from 'fs';
import path from 'path';
import { db_mysql } from '../config/database/my-sql.config';

const executeQueryAsync = async (data: string, fileName: string) => {
  return new Promise(resolve => {
    db_mysql.query(data, (err, result) => {
      if (err) throw Error(`Fail in db_mysql: ${fileName} \n` + err);
      console.log('processing 📜📃 => ' + fileName)
      resolve(JSON.stringify(result))
    })
  })
}

console.log('Migration Started 🚀');
console.time('Execute in: ');
fs.readdir(__dirname + '/migrations', async (err, files) => {
  if (err) throw new Error('Fail in access directory \n' + err);
  const listOfPromises = [];
  for (const fileName of files) {
    listOfPromises.push(
      executeQueryAsync(
        readFileSync(`${__dirname}/migrations/${fileName}`, { encoding: 'utf-8' }),
        fileName
      ))
  };
  const result = await Promise.all(listOfPromises);
  const errInMigration = result.filter(_ => _ === undefined).length > 0;
  if (errInMigration) throw new Error('Fail in readFileSync \n');
  db_mysql.end();
  console.log('Migration Finished 🤩🤗');
  console.timeEnd('Execute in: ');
});

export { executeQueryAsync }