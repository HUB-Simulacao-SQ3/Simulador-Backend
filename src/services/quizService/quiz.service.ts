import { IQuizType, Quiz } from "../../models/Quiz";
import { QueryToAsync } from "../../utils/queryToPromise";

async function getAllQuizsQuery(): Promise<Quiz[]> {
  return QueryToAsync<Quiz[]>('select * from  Quiz', null);
};

async function getAllQuizCaseQuery(caseId: string): Promise<Quiz[]> {
  return QueryToAsync<Quiz[]>('SELECT * FROM Quiz WHERE case_id = ?', [caseId]);
};

async function insertQuizQuery(_quiz: IQuizType): Promise<Quiz> {
  const { case_id, type, question, response, file } = _quiz;
  return QueryToAsync<Quiz>(
    `INSERT INTO Quiz (case_id, type, question, response ${file ? ',' + file : ''}) VALUES (?, ?, ?, ? ${file ? ', ?' : ''});`,
    [case_id, type, question, response, file!]);
};

async function updateQuizQuery(_quiz: IQuizType): Promise<Quiz> {
  const { type, question, response, file, id } = _quiz;
  return QueryToAsync<Quiz>(
    `UPDATE Quiz SET type = ?, question = ?, response = ? ${file ? ', file = ?' : ''} WHERE id = ?`
    , [type, question, response, file ?? id!]);
};

async function deleteQuizQuery(id: string): Promise<Quiz[]> {
  return QueryToAsync<Quiz[]>('DELETE FROM Quiz WHERE id = ?', [id]);
};

export { getAllQuizsQuery, insertQuizQuery, updateQuizQuery, deleteQuizQuery, getAllQuizCaseQuery };