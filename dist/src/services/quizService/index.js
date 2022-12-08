"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizService = void 0;
const quiz_service_1 = require("./quiz.service");
const QuizService = {
    getAllQuizsQuery: quiz_service_1.getAllQuizsQuery,
    insertQuizQuery: quiz_service_1.insertQuizQuery,
    updateQuizQuery: quiz_service_1.updateQuizQuery,
    deleteQuizQuery: quiz_service_1.deleteQuizQuery,
    getAllQuizCaseQuery: quiz_service_1.getAllQuizCaseQuery
};
exports.QuizService = QuizService;
