"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const isValuesEmptyInObject_1 = require("../utils/isValuesEmptyInObject");
const entity_1 = require("./entity");
var UsersTypeEnum;
(function (UsersTypeEnum) {
    UsersTypeEnum[UsersTypeEnum["admin"] = 0] = "admin";
    UsersTypeEnum[UsersTypeEnum["user"] = 1] = "user";
    UsersTypeEnum[UsersTypeEnum["teacher"] = 2] = "teacher";
})(UsersTypeEnum || (UsersTypeEnum = {}));
class User extends entity_1.Entity {
    constructor(props, id) {
        super(props, id);
    }
    static create(props, id) {
        const isEmpty = (0, isValuesEmptyInObject_1.isValuesEmptyInObject)(props, ['id', 'image']);
        if (isEmpty.isNull)
            throw new Error(`Values ​​cannot be empty: ${isEmpty.values.join(' ')}`);
        const user = new User(props, id).props;
        return user;
    }
}
exports.User = User;
