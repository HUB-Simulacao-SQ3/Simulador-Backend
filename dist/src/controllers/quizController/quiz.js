"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuizCaseController = exports.deleteQuizController = exports.updateQuizController = exports.insertQuizController = exports.getAllQuizsController = void 0;
const quiz_1 = require("../../models/quiz");
const quizService_1 = require("../../services/quizService");
const getAllQuizsController = async (req, res) => {
    const quiz = await quizService_1.QuizService.getAllQuizsQuery();
    return res.status(200).json(quiz);
};
exports.getAllQuizsController = getAllQuizsController;
const insertQuizController = async (req, res) => {
    const _quiz = req.body;
    const quiz = quiz_1.Quiz.create(_quiz);
    const response = await quizService_1.QuizService.insertQuizQuery(quiz);
    return res.status(200).json(response);
};
exports.insertQuizController = insertQuizController;
const updateQuizController = async (req, res) => {
    const _quiz = req.body;
    const quiz = quiz_1.Quiz.create(_quiz, _quiz.id);
    const response = await quizService_1.QuizService.updateQuizQuery(quiz);
    return res.status(200).json(response);
};
exports.updateQuizController = updateQuizController;
const getQuizCaseController = async (req, res) => {
    const response = await quizService_1.QuizService.getAllQuizCaseQuery(req.params.id);
    return res.status(200).json(response);
};
exports.getQuizCaseController = getQuizCaseController;
const deleteQuizController = async (req, res) => {
    const { id } = req.params;
    const response = await quizService_1.QuizService.deleteQuizQuery(id);
    return res.status(200).json(response);
};
exports.deleteQuizController = deleteQuizController;
