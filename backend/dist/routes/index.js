"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const users_1 = require("./users");
const firebase_1 = require("../config/firebase");
const router = (0, express_1.Router)();
exports.router = router;
router.use('/users', users_1.usersRouter);
router.post('/register', async (req, res) => {
    try {
        const { email, password, name } = req.body;
        const userRecord = await firebase_1.auth.createUser({
            email,
            password,
            displayName: name
        });
        const token = await firebase_1.auth.createCustomToken(userRecord.uid);
        return res.status(201).json({
            user: {
                id: userRecord.uid,
                name: userRecord.displayName,
                email: userRecord.email
            },
            token
        });
    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
});
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await firebase_1.auth.getUserByEmail(email);
        const token = await firebase_1.auth.createCustomToken(user.uid);
        return res.json({
            user: {
                id: user.uid,
                name: user.displayName,
                email: user.email
            },
            token
        });
    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
});
