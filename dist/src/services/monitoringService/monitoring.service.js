"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMonitoringQuery = exports.updateMonitoringQuery = exports.insertMonitoringQuery = exports.getAllMonitoringsQuery = void 0;
const queryToPromise_1 = require("../../utils/queryToPromise");
async function getAllMonitoringsQuery() {
    return (0, queryToPromise_1.QueryToAsync)('select * from  Monitoring', null);
}
exports.getAllMonitoringsQuery = getAllMonitoringsQuery;
;
async function insertMonitoringQuery(_monitoring) {
    const { pressure, temperature } = _monitoring;
    return (0, queryToPromise_1.QueryToAsync)('INSERT INTO Monitoring (pressure, temperature) VALUES (?, ?);', [pressure, temperature]);
}
exports.insertMonitoringQuery = insertMonitoringQuery;
;
async function updateMonitoringQuery(_monitoring) {
    const { pressure, temperature, id } = _monitoring;
    return (0, queryToPromise_1.QueryToAsync)('UPDATE Monitoring SET  pressure = ?, temperature = ? WHERE id = ?', [pressure, temperature, id]);
}
exports.updateMonitoringQuery = updateMonitoringQuery;
;
async function deleteMonitoringQuery(id) {
    return (0, queryToPromise_1.QueryToAsync)('DELETE FROM Monitoring WHERE id = ?', [id]);
}
exports.deleteMonitoringQuery = deleteMonitoringQuery;
;
