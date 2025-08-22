import { UserRepository } from '../repositories/UserRepository';
import { User, CreateUserDTO } from '../interfaces/User';

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async create(data: CreateUserDTO): Promise<User> {
    // Validações de senha foram removidas, pois a senha não é mais manipulada aqui.
    if (!data.name || !data.email || !data.id) {
      throw new Error('ID, nome e email são obrigatórios');
    }

    const userExists = await this.userRepository.findById(data.id);
    if (userExists) {
      throw new Error('Usuário já existe no banco de dados.');
    }

    return this.userRepository.create(data);
  }

  // ... os outros métodos (findAll, findById, update, delete) permanecem iguais ...
  async findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  async findById(id: string): Promise<User> {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new Error('Usuário não encontrado');
    }
    return user;
  }

  async update(id: string, data: Partial<CreateUserDTO>): Promise<User> {
    if (Object.keys(data).length === 0) {
      throw new Error('Nenhum dado para atualizar');
    }
    return this.userRepository.update(id, data);
  }

  async delete(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}
