"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCasesIdQueryJoin = exports.getAllCasesQueryJoin = exports.deleteCaseQuery = exports.updateCaseQuery = exports.insertCaseQuery = exports.getAllCasesQuery = void 0;
const queryToPromise_1 = require("../../utils/queryToPromise");
async function getAllCasesQuery() {
    return (0, queryToPromise_1.QueryToAsync)('select * from  Cases', null);
}
exports.getAllCasesQuery = getAllCasesQuery;
;
async function getAllCasesIdQueryJoin(id) {
    return (0, queryToPromise_1.QueryToAsync)('SELECT * FROM Cases INNER JOIN Monitoring ON (Monitoring.id = Cases.monitoring_id) INNER JOIN Patients ON (Patients.id = Cases.patient_id) WHERE Cases.id = ?', [id]);
}
exports.getAllCasesIdQueryJoin = getAllCasesIdQueryJoin;
;
async function getAllCasesQueryJoin() {
    return (0, queryToPromise_1.QueryToAsync)('SELECT * FROM Cases INNER JOIN Monitoring ON (Monitoring.id = Cases.monitoring_id) INNER JOIN Patients ON (Patients.id = Cases.patient_id)', null);
}
exports.getAllCasesQueryJoin = getAllCasesQueryJoin;
;
async function insertCaseQuery(_cases) {
    const { title, description, scenery, patient_id, monitoring_id, users_id } = _cases;
    return (0, queryToPromise_1.QueryToAsync)('INSERT INTO Cases (title, description, scenery, patient_id, monitoring_id, users_id) VALUES (?, ?, ?, ?, ?, ?);', [title, description, scenery, patient_id, monitoring_id, users_id]);
}
exports.insertCaseQuery = insertCaseQuery;
;
async function updateCaseQuery(_cases) {
    const { title, description, scenery, id } = _cases;
    return (0, queryToPromise_1.QueryToAsync)('UPDATE Cases SET title = ?, description = ?, scenery = ? WHERE id = ?', [title, description, scenery, id]);
}
exports.updateCaseQuery = updateCaseQuery;
;
async function deleteCaseQuery(id) {
    return (0, queryToPromise_1.QueryToAsync)('DELETE FROM Cases WHERE id = ?', [id]);
}
exports.deleteCaseQuery = deleteCaseQuery;
;
