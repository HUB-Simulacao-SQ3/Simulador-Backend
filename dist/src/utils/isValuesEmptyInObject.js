"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValuesEmptyInObject = void 0;
function isValuesEmptyInObject(_object, ignoreProperties) {
    var _a;
    const array = (_a = Object.keys(_object)) === null || _a === void 0 ? void 0 : _a.filter(item => {
        if (ignoreProperties === null || ignoreProperties === void 0 ? void 0 : ignoreProperties.find(value => item === value)) {
            return false;
        }
        return (_object[item] === '' || _object[item] === null || _object[item] === undefined);
    });
    return {
        isNull: array.length > 0,
        values: array
    };
}
exports.isValuesEmptyInObject = isValuesEmptyInObject;
