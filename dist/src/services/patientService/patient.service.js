"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePatientQuery = exports.updatePatientQuery = exports.insertPatientQuery = exports.getAllPatientsQuery = void 0;
const queryToPromise_1 = require("../../utils/queryToPromise");
async function getAllPatientsQuery() {
    return (0, queryToPromise_1.QueryToAsync)('select * from Patients', null);
}
exports.getAllPatientsQuery = getAllPatientsQuery;
;
async function insertPatientQuery(Patients) {
    const { name, age, chief_complaint, imc, professional, weight } = Patients;
    return (0, queryToPromise_1.QueryToAsync)('INSERT INTO Patients(name, age, chief_complaint, imc, professional, weight) VALUES (?, ?, ?, ?, ?, ?);', [name, age, chief_complaint, imc, professional, weight]);
}
exports.insertPatientQuery = insertPatientQuery;
;
async function updatePatientQuery(Patients) {
    const { name, age, chief_complaint, imc, professional, weight, id } = Patients;
    return (0, queryToPromise_1.QueryToAsync)('UPDATE Patients SET  name = ?, age = ?, chief_complaint = ?, imc = ?, professional = ?, weight = ? WHERE id = ?', [name, age, chief_complaint, imc, professional, weight, id]);
}
exports.updatePatientQuery = updatePatientQuery;
;
async function deletePatientQuery(id) {
    return (0, queryToPromise_1.QueryToAsync)('DELETE FROM Patients WHERE id = ?', [id]);
}
exports.deletePatientQuery = deletePatientQuery;
;
