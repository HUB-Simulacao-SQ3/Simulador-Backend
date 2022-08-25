import { isValuesEmptyInObject } from "../utils/isValuesEmptyInObject";
import { Entity } from "./entity";

enum QuizTypeEnum { 
  'initial_analysis', 'physic_exam', 'conducts', 'complement_exam'
}


type IQuizType = {
  id: string;
  case_id: string;
  type: QuizTypeEnum;
  question: string;
  response: string;
  file?: Blob;
  created_at: Date;
  updated_at: Date;
}

class Quiz extends Entity<IQuizType> {
  private constructor(props: IQuizType, id?: string) {
    super(props, id)
  }

  static create(props: IQuizType, id?: string) {
    const isEmpty = isValuesEmptyInObject(props, ['id', 'file']);
    if(isEmpty.isNull) throw new Error(`Values ​​cannot be empty: ${isEmpty.values.join(' ')}`);
    const quiz = new Quiz(props, id).props;
    return quiz;
  }
}

export { Quiz };
export type { IQuizType };