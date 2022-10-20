import { Router } from 'express'
import { getAllPatientsController, insertPatientController, updatePatientController, deletePatientController } from '../../controllers/patientsController';

module.exports = (routes: Router) => {

  routes.get('/patients',
    (req, res, next) => {
      /**  
        #swagger.tags = ['Patients']
        #swagger.description = 'Listagem de todos pacientes'
        #swagger.responses[0] = {
          schema: [ { $ref: '#/definitions/patients' } ]
        }
    */
      next();
    }, getAllPatientsController);

  routes.post('/patient', (req, res, next) => {
    /**  
      #swagger.tags = ['Patients']
      #swagger.parameters['patients'] = { 
        in: 'body', schema: { $ref: '#/definitions/patientInsert' } }
    */
    next();
  }, insertPatientController);

  routes.put('/patient', (req, res, next) => {
    /**  
      #swagger.tags = ['Patients']
      #swagger.parameters['patients'] = { 
        in: 'body', schema: { $ref: '#/definitions/patientUpdate' } }
    */
    next();
  }, updatePatientController);

  routes.delete('/patient/:id',
    (req, res, next) => {
      /**  
        #swagger.tags = ['Patients']
      */
      next()
    }, deletePatientController);
}