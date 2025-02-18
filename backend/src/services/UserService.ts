import { UserRepository } from '../repositories/UserRepository';
import { User, CreateUserDTO, UpdateUserDTO } from '../interfaces/User';

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async create(data: CreateUserDTO): Promise<User> {
    // Validações básicas
    if (!data.name || !data.email || !data.password) {
      throw new Error('Nome, email e senha são obrigatórios');
    }

    if (data.password.length < 6) {
      throw new Error('A senha deve ter no mínimo 6 caracteres');
    }

    return this.userRepository.create(data);
  }

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

  async update(id: string, data: UpdateUserDTO): Promise<User> {
    // Validações básicas
    if (Object.keys(data).length === 0) {
      throw new Error('Nenhum dado para atualizar');
    }

    return this.userRepository.update(id, data);
  }

  async delete(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
} 