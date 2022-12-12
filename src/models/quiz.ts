import { isValuesEmptyInObject } from "../utils/isValuesEmptyInObject";
import { Entity } from "./entity";

enum QuizTypeEnum {
  'initial_analysis', 'physic_exam', 'conducts', 'complement_exam'
}

interface IAlternatives {
  text: string;
}

type IQuizType = {
  id: string;
  quiz_id: string;
  case_id?: string;
  type: QuizTypeEnum;
  question: string;
  file: any;
  alternatives: IAlternatives[];
  alternative1: string;
  alternative2: string;
  alternative3: string;
  alternative4: string;
  alternativeCorrect: number;
  rollbackQuiz: string[];
  justification?: string;
}

class Quiz extends Entity<IQuizType> {
  private constructor(props: IQuizType, id?: string) {
    super(props, id)
  }

  static create(props: IQuizType, id?: string) {
    const isEmpty = isValuesEmptyInObject(props, ['id', 'file']);
    if (isEmpty.isNull) throw new Error(`Values ​​cannot be empty: ${isEmpty.values.join(' ')}`);
    const quiz = new Quiz(props, id).props;
    return quiz;
  }
}

export { Quiz };
export type { IQuizType };