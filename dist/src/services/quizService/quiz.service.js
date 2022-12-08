"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllQuizCaseQuery = exports.deleteQuizQuery = exports.updateQuizQuery = exports.insertQuizQuery = exports.getAllQuizsQuery = void 0;
const queryToPromise_1 = require("../../utils/queryToPromise");
async function getAllQuizsQuery() {
    return (0, queryToPromise_1.QueryToAsync)('select * from  Quiz', null);
}
exports.getAllQuizsQuery = getAllQuizsQuery;
;
async function getAllQuizCaseQuery(caseId) {
    return (0, queryToPromise_1.QueryToAsync)('SELECT * FROM Quiz WHERE case_id = ?', [caseId]);
}
exports.getAllQuizCaseQuery = getAllQuizCaseQuery;
;
async function insertQuizQuery(_quiz) {
    const { case_id, type, question, response, file } = _quiz;
    return (0, queryToPromise_1.QueryToAsync)(`INSERT INTO Quiz (case_id, type, question, response ${file ? ',' + file : ''}) VALUES (?, ?, ?, ? ${file ? ', ?' : ''});`, [case_id, type, question, response, file]);
}
exports.insertQuizQuery = insertQuizQuery;
;
async function updateQuizQuery(_quiz) {
    const { type, question, response, file, id } = _quiz;
    console.log(_quiz);
    if (file) {
        return (0, queryToPromise_1.QueryToAsync)(`UPDATE Quiz SET type = ?, question = ?, response = ?, file = ? WHERE id = ?`, [type, question, response, file, id]);
    }
    else {
        return (0, queryToPromise_1.QueryToAsync)(`UPDATE Quiz SET type = ?, question = ?, response = ? WHERE id = ?`, [type, question, response, id]);
    }
}
exports.updateQuizQuery = updateQuizQuery;
;
async function deleteQuizQuery(id) {
    return (0, queryToPromise_1.QueryToAsync)('DELETE FROM Quiz WHERE id = ?', [id]);
}
exports.deleteQuizQuery = deleteQuizQuery;
;
