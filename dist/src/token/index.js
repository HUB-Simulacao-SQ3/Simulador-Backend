"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.createToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.join(__dirname, '..', '..', '.env') });
function createToken(object) {
    var token = jsonwebtoken_1.default.sign(object, process.env.JWT_SECRET_KEY);
    return token;
}
exports.createToken = createToken;
function verifyToken(token) {
    var verify = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
        if (err) {
            return {
                auth: false,
                message: 'Ocorreu um erro ao verificar o token',
                error: err,
            };
        }
        return {
            auth: true,
            message: 'Token verficado com sucesso',
            decoded
        };
    });
    return verify;
}
exports.verifyToken = verifyToken;
