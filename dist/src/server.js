"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const app_1 = require("./app");
const server = (0, express_1.default)();
server.use(app_1.app);
const port = process.env.PORT || 3002;
server.listen(port, () => {
    console.log('Server Started 💻 in port ' + port);
});
