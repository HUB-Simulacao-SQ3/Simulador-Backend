"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePatientController = exports.updatePatientController = exports.insertPatientController = exports.getAllPatientsController = void 0;
const patient_1 = require("../../models/patient");
const patientService_1 = require("../../services/patientService/");
const getAllPatientsController = async (req, res) => {
    const patient = await patientService_1.PatientService.getAllPatientsQuery();
    return res.status(200).json(patient);
};
exports.getAllPatientsController = getAllPatientsController;
const insertPatientController = async (req, res) => {
    const _patient = req.body;
    const patient = patient_1.Patient.create(_patient);
    const response = await patientService_1.PatientService.insertPatientQuery(patient);
    return res.status(200).json(response);
};
exports.insertPatientController = insertPatientController;
const updatePatientController = async (req, res) => {
    const _patient = req.body;
    const patient = patient_1.Patient.create(_patient, _patient.id);
    const response = await patientService_1.PatientService.updatePatientQuery(patient);
    return res.status(200).json(response);
};
exports.updatePatientController = updatePatientController;
const deletePatientController = async (req, res) => {
    const { id } = req.params;
    const response = await patientService_1.PatientService.deletePatientQuery(id);
    return res.status(200).json(response);
};
exports.deletePatientController = deletePatientController;
