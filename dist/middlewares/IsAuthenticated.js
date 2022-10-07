"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsAuthenticated = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
function IsAuthenticated(req, res, next) {
    const authToken = req.headers.authorization;
    // verifica a existencia do token
    if (!authToken) {
        return res.status(401).end();
    }
    // trata informação do token
    const [, token] = authToken.split(" ");
    // verifica autenticidade do token
    try {
        const { sub } = (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET);
        req.user_email = sub;
        return next();
    }
    catch (e) {
        return res.status(401).end();
    }
}
exports.IsAuthenticated = IsAuthenticated;
