import { auth, db } from '@/config/firebase';
import { User, CreateUserDTO, UpdateUserDTO } from '../interfaces/User';

export class UserRepository {
  private collection = db.collection('users');

  async create(data: CreateUserDTO): Promise<User> {
    try {
      // REMOVIDO: A criação do usuário no Firebase Auth não acontece mais aqui.
      // O usuário já foi criado pelo frontend.

      // Apenas cria o documento no Firestore com os dados recebidos.
      const userData: Omit<User, 'id'> = {
        name: data.name,
        email: data.email,
        role: data.role || 'user',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      // Usa o ID do Firebase (que veio do token) como ID do documento.
      await this.collection.doc(data.id).set(userData);

      return {
        id: data.id,
        ...userData,
      };
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  // ... os outros métodos (findAll, findById, update, delete) permanecem praticamente iguais ...
  async findAll(): Promise<User[]> {
    try {
      const snapshot = await this.collection.get();
      return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt.toDate(),
        updatedAt: doc.data().updatedAt.toDate(),
      })) as User[];
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async findById(id: string): Promise<User | null> {
    try {
      const doc = await this.collection.doc(id).get();
      if (!doc.exists) return null;

      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        createdAt: data?.createdAt.toDate(),
        updatedAt: data?.updatedAt.toDate(),
      } as User;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async update(id: string, data: UpdateUserDTO): Promise<User> {
    try {
      const user = await this.findById(id);
      if (!user) throw new Error('Usuário não encontrado');

      const updateData = {
        ...data,
        updatedAt: new Date(),
      };

      await this.collection.doc(id).update(updateData);

      return {
        ...user,
        ...updateData,
      };
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      const user = await this.findById(id);
      if (!user) throw new Error('Usuário não encontrado');

      // Esta é uma operação destrutiva e poderosa. Mantenha-a bem protegida.
      await Promise.all([
        auth.deleteUser(id), // Deleta do Firebase Auth
        this.collection.doc(id).delete(), // Deleta do Firestore
      ]);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
