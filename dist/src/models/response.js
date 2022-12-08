"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseModel = void 0;
class ResponseModel {
    constructor(data, success, messagesError) {
        this.success = false;
        this.data = {};
        this.messagesError = [];
        this.data = data;
        this.success = success;
        this.messagesError = messagesError;
    }
}
exports.ResponseModel = ResponseModel;
