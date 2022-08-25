import { Router } from 'express';
import { deleteCaseController, getAllCasesController, getAllCasesIdJoinController, getAllCasesJoinController, insertCaseController, updateCaseController } from '../controllers/caseController/case';
import { deleteMonitoringController, getAllMonitoringsController, insertMonitoringController, updateMonitoringController } from '../controllers/monitoringController/monitoring';
import { insertPatientController, updatePatientController, getAllPatientsController, deletePatientController } from '../controllers/patientController/patients';
import { deleteQuizController, getAllQuizsController, getQuizCaseController, insertQuizController, updateQuizController } from '../controllers/quizController/quiz';
import { deleteUserController, getAllUsersController, insertUserController, updateUserController } from '../controllers/usersController/users';

const routes = Router();

// Default
routes.get('/', (req, res) => res.status(200).json({ message: "Hi, Welcome Friend!" }));

// Users
routes.get('/users', getAllUsersController);
routes.post('/user', insertUserController);
routes.put('/user', updateUserController);
routes.delete('/user/:id', deleteUserController);

// Patients
routes.get('/patients', getAllPatientsController);
routes.post('/patient', insertPatientController);
routes.put('/patient', updatePatientController);
routes.delete('/patient/:id', deletePatientController);

// Monitoring
routes.get('/monitorings', getAllMonitoringsController);
routes.post('/monitoring', insertMonitoringController);
routes.put('/monitoring', updateMonitoringController);
routes.delete('/monitoring/:id', deleteMonitoringController);

// Cases
routes.get('/cases', getAllCasesController);
routes.get('/cases/all/', getAllCasesJoinController);
routes.get('/cases/all/:id', getAllCasesIdJoinController);
routes.post('/case', insertCaseController);
routes.put('/case', updateCaseController);
routes.delete('/case/:id', deleteCaseController);

// Cases
routes.get('/quizs', getAllQuizsController);
routes.get('/quiz/case/:id', getQuizCaseController);
routes.post('/quiz', insertQuizController);
routes.put('/quiz', updateQuizController);
routes.delete('/quiz/:id', deleteQuizController);

export { routes };
