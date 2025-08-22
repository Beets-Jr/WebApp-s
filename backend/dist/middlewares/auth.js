"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = authMiddleware;
const firebase_1 = require("../config/firebase");
async function authMiddleware(req, res, next) {
    var _a;
    try {
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split('Bearer ')[1];
        if (!token) {
            return res.status(401).json({ error: 'Token não fornecido' });
        }
        try {
            const decodedToken = await firebase_1.auth.verifyIdToken(token);
            req.user = {
                id: decodedToken.uid,
                email: decodedToken.email,
                role: decodedToken.role || 'user',
            };
            return next();
        }
        catch (error) {
            return res.status(401).json({ error: 'Token inválido' });
        }
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
