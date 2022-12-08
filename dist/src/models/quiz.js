"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quiz = void 0;
const isValuesEmptyInObject_1 = require("../utils/isValuesEmptyInObject");
const entity_1 = require("./entity");
var QuizTypeEnum;
(function (QuizTypeEnum) {
    QuizTypeEnum[QuizTypeEnum["initial_analysis"] = 0] = "initial_analysis";
    QuizTypeEnum[QuizTypeEnum["physic_exam"] = 1] = "physic_exam";
    QuizTypeEnum[QuizTypeEnum["conducts"] = 2] = "conducts";
    QuizTypeEnum[QuizTypeEnum["complement_exam"] = 3] = "complement_exam";
})(QuizTypeEnum || (QuizTypeEnum = {}));
class Quiz extends entity_1.Entity {
    constructor(props, id) {
        super(props, id);
    }
    static create(props, id) {
        const isEmpty = (0, isValuesEmptyInObject_1.isValuesEmptyInObject)(props, ['id', 'file']);
        if (isEmpty.isNull)
            throw new Error(`Values ​​cannot be empty: ${isEmpty.values.join(' ')}`);
        const quiz = new Quiz(props, id).props;
        return quiz;
    }
}
exports.Quiz = Quiz;
