import { db, auth } from '../config/firebase';
import { User, CreateUserDTO, UpdateUserDTO } from '../interfaces/User';

export class UserRepository {
  private collection = db.collection('users');

  async create(data: CreateUserDTO): Promise<User> {
    try {
      // Criar usuário no Firebase Auth
      const userRecord = await auth.createUser({
        email: data.email,
        password: data.password,
        displayName: data.name,
      });

      // Criar documento no Firestore
      const user: Omit<User, 'id'> = {
        name: data.name,
        email: data.email,
        role: data.role || 'user',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      await this.collection.doc(userRecord.uid).set(user);

      return {
        id: userRecord.uid,
        ...user,
      };
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async findAll(): Promise<User[]> {
    try {
      const snapshot = await this.collection.get();
      return snapshot.docs.map(doc => ({
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

      await Promise.all([
        auth.deleteUser(id),
        this.collection.doc(id).delete(),
      ]);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
} 