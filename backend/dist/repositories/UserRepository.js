"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const firebase_1 = require("../config/firebase");
class UserRepository {
    constructor() {
        this.collection = firebase_1.db.collection('users');
    }
    async create(data) {
        try {
            const userRecord = await firebase_1.auth.createUser({
                email: data.email,
                password: data.password,
                displayName: data.name,
            });
            const user = {
                name: data.name,
                email: data.email,
                role: data.role || 'user',
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            await this.collection.doc(userRecord.uid).set(user);
            return Object.assign({ id: userRecord.uid }, user);
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async findAll() {
        try {
            const snapshot = await this.collection.get();
            return snapshot.docs.map(doc => (Object.assign(Object.assign({ id: doc.id }, doc.data()), { createdAt: doc.data().createdAt.toDate(), updatedAt: doc.data().updatedAt.toDate() })));
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async findById(id) {
        try {
            const doc = await this.collection.doc(id).get();
            if (!doc.exists)
                return null;
            const data = doc.data();
            return Object.assign(Object.assign({ id: doc.id }, data), { createdAt: data === null || data === void 0 ? void 0 : data.createdAt.toDate(), updatedAt: data === null || data === void 0 ? void 0 : data.updatedAt.toDate() });
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async update(id, data) {
        try {
            const user = await this.findById(id);
            if (!user)
                throw new Error('Usuário não encontrado');
            const updateData = Object.assign(Object.assign({}, data), { updatedAt: new Date() });
            await this.collection.doc(id).update(updateData);
            return Object.assign(Object.assign({}, user), updateData);
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async delete(id) {
        try {
            const user = await this.findById(id);
            if (!user)
                throw new Error('Usuário não encontrado');
            await Promise.all([
                firebase_1.auth.deleteUser(id),
                this.collection.doc(id).delete(),
            ]);
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
}
exports.UserRepository = UserRepository;
