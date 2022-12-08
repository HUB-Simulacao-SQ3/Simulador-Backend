"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientService = void 0;
const patient_service_1 = require("./patient.service");
const PatientService = {
    getAllPatientsQuery: patient_service_1.getAllPatientsQuery,
    insertPatientQuery: patient_service_1.insertPatientQuery,
    updatePatientQuery: patient_service_1.updatePatientQuery,
    deletePatientQuery: patient_service_1.deletePatientQuery
};
exports.PatientService = PatientService;
