# Interfaces em Arquitetura MVC e TypeScript

## O que são Interfaces?

Interfaces em TypeScript são contratos que definem a estrutura de um objeto. Elas especificam quais propriedades e métodos um objeto deve ter, mas não implementam a funcionalidade. Isso permite que diferentes classes ou objetos sigam a mesma estrutura, garantindo consistência e facilitando a manutenção do código.

## Interfaces na Arquitetura MVC

A arquitetura MVC (Model-View-Controller) é um padrão de design que separa a aplicação em três componentes principais:

- **Model**: Representa os dados e a lógica de negócios da aplicação.
- **View**: Responsável pela apresentação dos dados ao usuário.
- **Controller**: Intermediário que manipula a entrada do usuário e atualiza o Model e a View.

### Uso de Interfaces no Model

No contexto do Model, as interfaces são usadas para definir a estrutura dos dados. Por exemplo, uma interface `IUser` pode definir as propriedades que um objeto usuário deve ter:

```typescript
interface IUser {
    id: number;
    name: string;
    email: string;
}
```

### Uso de Interfaces no Controller

Os Controllers utilizam interfaces para garantir que os dados recebidos e enviados estejam no formato correto. Por exemplo, ao criar um novo usuário, o Controller pode esperar um objeto que implemente a interface `IUser`:

```typescript
const createUser = async (userData: IUser): Promise<IUser> => {
    // Lógica para criar um novo usuário
};
```

### Uso de Interfaces na View

Na View, as interfaces ajudam a garantir que os dados exibidos estejam no formato esperado. Por exemplo, uma interface `IUserResponse` pode definir quais dados serão retornados ao cliente:

```typescript
interface IUserResponse {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
}
```

## Benefícios do Uso de Interfaces

- **Consistência**: Garante que diferentes partes da aplicação sigam a mesma estrutura.
- **Manutenibilidade**: Facilita a atualização e manutenção do código.
- **Flexibilidade**: Permite que diferentes implementações sigam o mesmo contrato.
- **Segurança de Tipo**: Ajuda a evitar erros de tipo durante o desenvolvimento.

## Exemplo Prático

Aqui está um exemplo de como as interfaces podem ser usadas em um repositório de usuários:

```typescript
import { Repository } from "typeorm";
import User from "../entities/User";
import IUser from "../interfaces/User/IUser";
import IUserResponse from "../interfaces/User/IUserResponse";

const userRepository: Repository<User> = AppDataSource.getRepository(User);

const getUsers = (): Promise<IUser[]> => {
    return userRepository.find();
};

const getUserByEmail = async (email: string): Promise<User | null> => {
    const user = await userRepository.findOneBy({ email });
    return user || null;
};

const createUser = async (userData: IUser): Promise<IUser> => {
    const newUser = userRepository.create(userData);
    await userRepository.save(newUser);
    return newUser;
};

const updateUser = async (id: number, userData: IUser): Promise<IUser | null> => {
    const user = await userRepository.findOneBy({ id });
    if (!user) return null;

    user.name = userData.name;
    user.email = userData.email;

    await userRepository.save(user);
    return user;
};

const deleteUser = async (id: number): Promise<boolean> => {
    const result = await userRepository.delete(id);
    return result.affected !== 0;
};
```

Neste exemplo, as interfaces `IUser` e `IUserResponse` garantem que os dados manipulados pelo repositório de usuários estejam no formato correto, promovendo consistência e segurança de tipo em toda a aplicação.
