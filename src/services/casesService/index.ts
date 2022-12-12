import { getAllCasesQuery, insertCaseQuery, updateCaseQuery, deleteCaseQuery, getAllCasesQueryJoin, getAllCasesIdQueryJoin, getCaseByCaseIdQuery } from "./case.service"


const CaseService = {
  getAllCasesQuery,
  insertCaseQuery,
  updateCaseQuery,
  deleteCaseQuery,
  getAllCasesQueryJoin,
  getCaseByCaseIdQuery,
  getAllCasesIdQueryJoin
}

export { CaseService }
