"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserLoginQuery = exports.deleteUserQuery = exports.updateUserQuery = exports.insertUserQuery = exports.getAllUsersQuery = void 0;
const queryToPromise_1 = require("../../utils/queryToPromise");
async function getAllUsersQuery() {
    return (0, queryToPromise_1.QueryToAsync)('select * from Users', null);
}
exports.getAllUsersQuery = getAllUsersQuery;
;
async function getUserLoginQuery(users) {
    const { password, email } = users;
    console.log('select * from Users WHERE email = ? password = ? ', [email, password]);
    return (0, queryToPromise_1.QueryToAsync)('select * from Users WHERE email = ? AND password = ? ', [email, password]);
}
exports.getUserLoginQuery = getUserLoginQuery;
;
async function insertUserQuery(users) {
    const { name, email, id } = users;
    return (0, queryToPromise_1.QueryToAsync)('INSERT INTO Users(name,email,password) VALUES (?,?,?);', [name, email, 'teste']);
}
exports.insertUserQuery = insertUserQuery;
;
async function updateUserQuery(users) {
    const { name, email, id } = users;
    return (0, queryToPromise_1.QueryToAsync)('UPDATE Users SET name = ?, email = ? WHERE id = ?', [name, email, id]);
}
exports.updateUserQuery = updateUserQuery;
;
async function deleteUserQuery(id) {
    return (0, queryToPromise_1.QueryToAsync)('DELETE FROM Users WHERE id = ?', [id]);
}
exports.deleteUserQuery = deleteUserQuery;
;
