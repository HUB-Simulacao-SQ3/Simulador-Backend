"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const patients_1 = require("../../controllers/patientController/patients");
module.exports = (routes) => {
    routes.get('/patients', (req, res, next) => {
        /**
          #swagger.tags = ['Patients']
          #swagger.description = 'Listagem de todos pacientes'
          #swagger.responses[0] = {
            schema: [ { $ref: '#/definitions/patients' } ]
          }
      */
        next();
    }, patients_1.getAllPatientsController);
    routes.post('/patient', (req, res, next) => {
        /**
          #swagger.tags = ['Patients']
          #swagger.parameters['patients'] = {
            in: 'body', schema: { $ref: '#/definitions/patientInsert' } }
        */
        next();
    }, patients_1.insertPatientController);
    routes.put('/patient', (req, res, next) => {
        /**
          #swagger.tags = ['Patients']
          #swagger.parameters['patients'] = {
            in: 'body', schema: { $ref: '#/definitions/patientUpdate' } }
        */
        next();
    }, patients_1.updatePatientController);
    routes.delete('/patient/:id', (req, res, next) => {
        /**
          #swagger.tags = ['Patients']
        */
        next();
    }, patients_1.deletePatientController);
};
