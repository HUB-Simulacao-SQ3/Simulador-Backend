"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCasesIdJoinController = exports.getAllCasesJoinController = exports.deleteCaseController = exports.updateCaseController = exports.insertCaseController = exports.getAllCasesController = void 0;
const case_1 = require("../../models/case");
const casesService_1 = require("../../services/casesService");
const getAllCasesController = async (req, res) => {
    const _case = await casesService_1.CaseService.getAllCasesQuery();
    return res.status(200).json(_case);
};
exports.getAllCasesController = getAllCasesController;
const getAllCasesJoinController = async (req, res) => {
    const _case = await casesService_1.CaseService.getAllCasesQueryJoin();
    return res.status(200).json(_case);
};
exports.getAllCasesJoinController = getAllCasesJoinController;
const getAllCasesIdJoinController = async (req, res) => {
    const { id } = req.params;
    const _case = await casesService_1.CaseService.getAllCasesIdQueryJoin(id);
    return res.status(200).json(_case[0]);
};
exports.getAllCasesIdJoinController = getAllCasesIdJoinController;
const insertCaseController = async (req, res) => {
    const _case = req.body;
    const case_ = case_1.Case.create(_case);
    const response = await casesService_1.CaseService.insertCaseQuery(case_);
    return res.status(200).json(response);
};
exports.insertCaseController = insertCaseController;
const updateCaseController = async (req, res) => {
    const _case = req.body;
    const case_ = case_1.Case.create(_case, _case.id);
    const response = await casesService_1.CaseService.updateCaseQuery(case_);
    return res.status(200).json(response);
};
exports.updateCaseController = updateCaseController;
const deleteCaseController = async (req, res) => {
    const { id } = req.params;
    const response = await casesService_1.CaseService.deleteCaseQuery(id);
    return res.status(200).json(response);
};
exports.deleteCaseController = deleteCaseController;
