"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
const uuid_1 = require("uuid");
class Entity {
    constructor(props, id) {
        this.props = Object.assign(Object.assign({}, props), { id: id !== null && id !== void 0 ? id : (0, uuid_1.v4)() });
    }
}
exports.Entity = Entity;
