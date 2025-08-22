"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const UserRepository_1 = require("../repositories/UserRepository");
class UserService {
    constructor() {
        this.userRepository = new UserRepository_1.UserRepository();
    }
    async create(data) {
        if (!data.name || !data.email || !data.password) {
            throw new Error('Nome, email e senha são obrigatórios');
        }
        if (data.password.length < 6) {
            throw new Error('A senha deve ter no mínimo 6 caracteres');
        }
        return this.userRepository.create(data);
    }
    async findAll() {
        return this.userRepository.findAll();
    }
    async findById(id) {
        const user = await this.userRepository.findById(id);
        if (!user) {
            throw new Error('Usuário não encontrado');
        }
        return user;
    }
    async update(id, data) {
        if (Object.keys(data).length === 0) {
            throw new Error('Nenhum dado para atualizar');
        }
        return this.userRepository.update(id, data);
    }
    async delete(id) {
        await this.userRepository.delete(id);
    }
}
exports.UserService = UserService;
