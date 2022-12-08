"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const fs_1 = __importDefault(require("fs"));
const routes = (0, express_1.Router)();
exports.routes = routes;
routes.get('/', (req, res) => res.status(200).json({ message: "Hi, Welcome Friend!" }));
fs_1.default.readdirSync(__dirname + '/urls').forEach(function (file) {
    if (file === "index.ts" || file === "urls")
        return;
    require('./urls/' + file)(routes);
});
