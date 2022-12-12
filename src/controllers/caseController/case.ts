import { Request, Response } from "express";
import { ICaseType, Case } from "../../models/case";
import { ResponseModel } from "../../models/response";
import { CaseService } from "../../services/casesService";
import { QuizService } from "../../services/quizService";

const getAllCasesController = async (req: Request, res: Response) => {
  const _case: Case[] = await CaseService.getAllCasesQuery();
  return res.status(200).json(new ResponseModel(_case, true, []));
}

const getAllCasesJoinController = async (req: Request, res: Response) => {
  const _case: Case[] = await CaseService.getAllCasesQueryJoin();
  return res.status(200).json(new ResponseModel(_case, true, []));
}

const getAllCasesIdJoinController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const _case: Case[] = await CaseService.getAllCasesIdQueryJoin(id);
  return res.status(200).json(new ResponseModel(_case[0], true, []));
}

const insertCaseController = async (req: Request, res: Response) => {
  const _case: ICaseType = req.body;
  const case_ = Case.create(_case);
  const response = await CaseService.insertCaseQuery(_case);


  if (response.affectedRows >= 1) {
    const promiseList: Promise<any>[] = [];
    case_.quizS?.map(_ => {
      _.case_id = case_.case_id;
      promiseList.push(QuizService.insertQuizQuery(_));
    });

    Promise.all(promiseList).then(_res => {
      return res.status(200).json(new ResponseModel({ response: _res }, true, []));
    }).catch((e) => {
      return res.status(200).json(new ResponseModel({}, true, [], e));
    })
  }
}

const updateCaseController = async (req: Request, res: Response) => {
  const _case: ICaseType = req.body;
  const case_ = Case.create(_case, _case.id);
  const response = await CaseService.updateCaseQuery(case_);
  return res.status(200).json(new ResponseModel(response, true, []));
}

const deleteCaseController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const response = await CaseService.deleteCaseQuery(id);
  return res.status(200).json(new ResponseModel(response, true, []));
}

const getCaseByCaseIdController = async (req: Request, res: Response) => {
  const { case_id } = req.params;
  const response = await CaseService.getCaseByCaseIdQuery(case_id);
  if (response?.length > 0) {
    return res.status(200).json(new ResponseModel(response, true, []));
  } else {
    return res.status(200).json(new ResponseModel(response, false, []));
  }
}

export {
  getAllCasesController,
  insertCaseController,
  updateCaseController,
  deleteCaseController,
  getCaseByCaseIdController,
  getAllCasesJoinController,
  getAllCasesIdJoinController
};