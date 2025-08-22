"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const UserService_1 = require("../services/UserService");
class UserController {
    constructor() {
        this.userService = new UserService_1.UserService();
    }
    async create(req, res) {
        try {
            const user = await this.userService.create(req.body);
            return res.status(201).json(user);
        }
        catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
    async findAll(req, res) {
        try {
            const users = await this.userService.findAll();
            return res.json(users);
        }
        catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
    async findById(req, res) {
        try {
            const user = await this.userService.findById(req.params.id);
            return res.json(user);
        }
        catch (error) {
            return res.status(404).json({ error: error.message });
        }
    }
    async update(req, res) {
        try {
            const user = await this.userService.update(req.params.id, req.body);
            return res.json(user);
        }
        catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
    async delete(req, res) {
        try {
            await this.userService.delete(req.params.id);
            return res.status(204).send();
        }
        catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}
exports.UserController = UserController;
