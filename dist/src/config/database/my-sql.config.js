"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db_mysql = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.join(__dirname, '..', '..', '..', '.env') });
var db_mysql = mysql2_1.default.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    decimalNumbers: true,
    bigNumberStrings: true,
    supportBigNumbers: true
});
exports.db_mysql = db_mysql;
(() => {
    db_mysql.connect((err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('The db is initialize 🎇');
        }
    });
})();
