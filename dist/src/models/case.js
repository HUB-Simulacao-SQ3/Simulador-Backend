"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Case = void 0;
const isValuesEmptyInObject_1 = require("../utils/isValuesEmptyInObject");
const entity_1 = require("./entity");
class Case extends entity_1.Entity {
    constructor(props, id) {
        super(props, id);
    }
    static create(props, id) {
        const isEmpty = (0, isValuesEmptyInObject_1.isValuesEmptyInObject)(props, ['id']);
        if (isEmpty.isNull)
            throw new Error(`Values ​​cannot be empty: ${isEmpty.values.join(' ')}`);
        const _case = new Case(props, id).props;
        return _case;
    }
}
exports.Case = Case;
