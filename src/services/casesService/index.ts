import { getAllCasesQuery, insertCaseQuery, updateCaseQuery, deleteCaseQuery, getAllCasesQueryJoin, getAllCasesIdQueryJoin } from "./case.service"


const CaseService = {
  getAllCasesQuery,
  insertCaseQuery,
  updateCaseQuery,
  deleteCaseQuery,
  getAllCasesQueryJoin,
  getAllCasesIdQueryJoin
}

export { CaseService }
