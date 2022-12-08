"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseService = void 0;
const case_service_1 = require("./case.service");
const CaseService = {
    getAllCasesQuery: case_service_1.getAllCasesQuery,
    insertCaseQuery: case_service_1.insertCaseQuery,
    updateCaseQuery: case_service_1.updateCaseQuery,
    deleteCaseQuery: case_service_1.deleteCaseQuery,
    getAllCasesQueryJoin: case_service_1.getAllCasesQueryJoin,
    getAllCasesIdQueryJoin: case_service_1.getAllCasesIdQueryJoin
};
exports.CaseService = CaseService;
