import { Request, Response } from "express";
import { ICaseType, Case } from "../../models/case";
import { CaseService } from "../../services/casesService";

const getAllCasesController = async (req: Request, res: Response) => {
  const _case: Case[] = await CaseService.getAllCasesQuery();
  return res.status(200).json(_case);
}

const getAllCasesJoinController = async (req: Request, res: Response) => {
  const _case: Case[] = await CaseService.getAllCasesQueryJoin();
  return res.status(200).json(_case);
}

const getAllCasesIdJoinController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const _case: Case[] = await CaseService.getAllCasesIdQueryJoin(id);
  return res.status(200).json(_case[0]);
}

const insertCaseController = async (req: Request, res: Response) => {
  const _case: ICaseType = req.body;
  const case_ = Case.create(_case);
  const response = await CaseService.insertCaseQuery(case_);
  return res.status(200).json(response);
}

const updateCaseController = async (req: Request, res: Response) => {
  const _case: ICaseType = req.body;
  const case_ = Case.create(_case, _case.id);
  const response = await CaseService.updateCaseQuery(case_);
  return res.status(200).json(response);
}

const deleteCaseController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const response = await CaseService.deleteCaseQuery(id);
  return res.status(200).json(response);
}

export {
  getAllCasesController,
  insertCaseController,
  updateCaseController,
  deleteCaseController,
  getAllCasesJoinController,
  getAllCasesIdJoinController
};