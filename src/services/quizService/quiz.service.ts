import { IQuizType, Quiz } from "../../models/quiz";
import { QueryToAsync } from "../../utils/queryToPromise";

async function getAllQuizsQuery(): Promise<Quiz[]> {
  return QueryToAsync<Quiz[]>('select * from  Quiz', null);
};

async function insertQuizQuery(_quiz: IQuizType): Promise<Quiz> {
  const { case_id, type, question, response, file } = _quiz;
  return QueryToAsync<Quiz>(
    'INSERT INTO Quiz (pressure, temperature) VALUES (?, ?);',
    [case_id, type, question, response, file!]);
};

async function updateQuizQuery(_quiz: IQuizType): Promise<Quiz> {
  const { case_id, type, question, response, file, id } = _quiz;
  return QueryToAsync<Quiz>(
    'UPDATE Quiz SET  case_id = ?, type = ?, question = ?, response = ?, file = ? WHERE id = ?'
    , [case_id, type, question, response, file, id!]);
};

async function deleteQuizQuery(id: string): Promise<Quiz[]> {
  return QueryToAsync<Quiz[]>('DELETE FROM Quiz WHERE id = ?', [id]);
};

export { getAllQuizsQuery, insertQuizQuery, updateQuizQuery, deleteQuizQuery };