import { Request, Response } from "express";
import { IQuizType, Quiz } from "../../models/quiz";
import { QuizService } from "../../services/quizService";

const getAllQuizsController = async (req: Request, res: Response) => {
  const quiz: Quiz[] = await QuizService.getAllQuizsQuery();
  return res.status(200).json(quiz);
}

const insertQuizController = async (req: Request, res: Response) => {
  const _quiz: IQuizType = req.body;
  const quiz = Quiz.create(_quiz);
  const response = await QuizService.insertQuizQuery(quiz);
  return res.status(200).json(response);
}

const updateQuizController = async (req: Request, res: Response) => {
  const _quiz: IQuizType = req.body;
  const quiz = Quiz.create(_quiz, _quiz.id);
  const response = await QuizService.updateQuizQuery(quiz);
  return res.status(200).json(response);
}

const getQuizCaseController = async (req: Request, res: Response) => {
  const response = await QuizService.getAllQuizCaseQuery(req.params.id);
  return res.status(200).json(response);
}

const deleteQuizController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const response = await QuizService.deleteQuizQuery(id);
  return res.status(200).json(response);
}

export {
  getAllQuizsController,
  insertQuizController,
  updateQuizController,
  deleteQuizController,
  getQuizCaseController
};