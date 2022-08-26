import { Router } from "express";
import { getAllQuizsController, getQuizCaseController, insertQuizController, updateQuizController, deleteQuizController } from "../../controllers/quizController/quiz";


module.exports = (routes: Router) => {
  routes.get('/quizs', getAllQuizsController);
  routes.get('/quiz/case/:id', getQuizCaseController);
  routes.post('/quiz', insertQuizController);
  routes.put('/quiz', updateQuizController);
  routes.delete('/quiz/:id', deleteQuizController);
}