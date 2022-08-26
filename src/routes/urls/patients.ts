import { Router } from 'express'
import { getAllPatientsController, insertPatientController, updatePatientController, deletePatientController } from '../../controllers/patientController/patients';

module.exports = (routes: Router) => {
  routes.get('/patients', getAllPatientsController);
  routes.post('/patient', insertPatientController);
  routes.put('/patient', updatePatientController);
  routes.delete('/patient/:id', deletePatientController);
}