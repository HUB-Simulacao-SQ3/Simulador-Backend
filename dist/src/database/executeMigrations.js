"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeQueryAsync = void 0;
const fs_1 = __importDefault(require("fs"));
const fs_2 = require("fs");
const my_sql_config_1 = require("../config/database/my-sql.config");
const executeQueryAsync = async (data, fileName) => {
    return new Promise(resolve => {
        my_sql_config_1.db_mysql.query(data, (err, result) => {
            if (err)
                throw Error(`Fail in db_mysql: ${fileName} \n` + err);
            console.log('processing 📜📃 => ' + fileName);
            resolve(JSON.stringify(result));
        });
    });
};
exports.executeQueryAsync = executeQueryAsync;
console.log('Migration Started 🚀');
console.time('Execute in: ');
fs_1.default.readdir(__dirname + '/migrations', async (err, files) => {
    if (err)
        throw new Error('Fail in access directory \n' + err);
    const listOfPromises = [];
    for (const fileName of files) {
        listOfPromises.push(executeQueryAsync((0, fs_2.readFileSync)(`${__dirname}/migrations/${fileName}`, { encoding: 'utf-8' }), fileName));
    }
    ;
    const result = await Promise.all(listOfPromises);
    const errInMigration = result.filter(_ => _ === undefined).length > 0;
    if (errInMigration)
        throw new Error('Fail in readFileSync \n');
    my_sql_config_1.db_mysql.end();
    console.log('Migration Finished 🤩🤗');
    console.timeEnd('Execute in: ');
});
