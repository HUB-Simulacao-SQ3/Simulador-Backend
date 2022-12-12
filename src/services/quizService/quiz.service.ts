import { IQuizType, Quiz } from "../../models/quiz";
import { QueryToAsync } from "../../utils/queryToPromise";

async function getAllQuizsQuery(): Promise<Quiz[]> {
  return QueryToAsync<Quiz[]>('select * from  Quiz', null);
};

async function getAllQuizCaseQuery(caseId: string): Promise<Quiz[]> {
  return QueryToAsync<Quiz[]>('SELECT * FROM Quiz WHERE case_id = ?', [caseId]);
};

async function insertQuizQuery(_quiz: IQuizType): Promise<any> {
  const { case_id, type, question, alternativeCorrect, alternative1, alternative2, alternative3, alternative4, rollbackQuiz, quiz_id, file } = _quiz;
  return QueryToAsync<any>(
    `INSERT INTO Quiz 
      (case_id, type, question, alternativeCorrect, alternative1, alternative2, alternative3, alternative4, rollbackQuiz, quiz_id ${file ? ',' + file : ''}) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ? ${file ? ', ?' : ''});`,
    [case_id, type, question, alternativeCorrect, alternative1, alternative2, alternative3, alternative4, rollbackQuiz, quiz_id, file!]);
};

async function updateQuizQuery(_quiz: IQuizType) {
  const { type, question, alternativeCorrect, file, id } = _quiz;
  if (file!) {
    return QueryToAsync<Quiz>(
      `UPDATE Quiz SET type = ?, question = ?, alternativeCorrect = ?, file = ? WHERE id = ?`
      , [type, question, alternativeCorrect, file, id]);
  } else {
    return QueryToAsync<Quiz>(
      `UPDATE Quiz SET type = ?, question = ?, alternativeCorrect = ? WHERE id = ?`
      , [type, question, alternativeCorrect, id]);

  }
};

async function deleteQuizQuery(id: string): Promise<Quiz[]> {
  return QueryToAsync<Quiz[]>('DELETE FROM Quiz WHERE id = ?', [id]);
};

export { getAllQuizsQuery, insertQuizQuery, updateQuizQuery, deleteQuizQuery, getAllQuizCaseQuery };