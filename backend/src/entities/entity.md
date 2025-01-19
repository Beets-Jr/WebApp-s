# Entidades na Arquitetura MVC

## Introdução

Na arquitetura MVC (Model-View-Controller), as entidades desempenham um papel crucial na camada de **Model**. Elas representam os dados e a lógica de negócios da aplicação, mapeando diretamente para as tabelas do banco de dados. Cada instância de uma entidade corresponde a uma linha na tabela.

---

## Responsabilidades das Entidades

### 1. Representação dos Dados
As entidades são responsáveis por definir a estrutura dos dados armazenados no banco de dados. Cada atributo de uma entidade corresponde a uma coluna da tabela.

Por exemplo, em uma entidade `User`, atributos como `name` e `email` mapeiam diretamente para colunas na tabela `users`. Isso garante consistência entre a aplicação e o banco de dados.

### 2. Mapeamento Objeto-Relacional (ORM)
As entidades utilizam frameworks de ORM (como TypeORM) para mapear classes e seus atributos para tabelas e colunas no banco de dados. Isso permite manipular os dados de forma orientada a objetos, eliminando a necessidade de escrever SQL diretamente para operações comuns.

Por exemplo, com o ORM, podemos usar métodos como `save`, `find` e `delete` diretamente nas entidades, simplificando a manipulação de dados.

### 3. Validação de Dados
As entidades podem conter regras de validação para garantir que os dados armazenados estejam corretos e consistentes. Isso é alcançado com decoradores e bibliotecas como `class-validator`.

Por exemplo:

```typescript
import { IsEmail, Length } from "class-validator";

class User {
   @Length(3, 50)
   name: string;

   @IsEmail()
   email: string;
}
```
Nesse exemplo, a validação garante que o nome tenha entre 3 e 50 caracteres e que o email seja válido.

### 4. Relacionamentos
As entidades definem os relacionamentos entre tabelas. Isso inclui:

#### Tipos de Relacionamentos

##### One-to-Many / Many-to-One
Representa uma relação onde uma entidade pode estar associada a várias instâncias de outra entidade, mas cada instância da segunda entidade pertence a apenas uma da primeira.

```typescript
@Entity()
export class User {
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   name: string;

   @OneToMany(() => Order, order => order.user)
   orders: Order[];
}

@Entity()
export class Order {
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   product: string;

   @ManyToOne(() => User, user => user.orders)
   user: User;
}
```

##### One-to-One
Uma relação onde uma entidade tem exatamente uma instância de outra entidade e vice-versa.

```typescript
@Entity()
export class User {
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   name: string;

   @OneToOne(() => Profile)
   @JoinColumn()
   profile: Profile;
}

@Entity()
export class Profile {
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   bio: string;

   @OneToOne(() => User, user => user.profile)
   user: User;
}
```

##### Many-to-Many
Uma relação onde várias instâncias de uma entidade podem estar relacionadas a várias instâncias de outra entidade.

```typescript
@Entity()
export class User {
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   name: string;

   @ManyToMany(() => Role)
   @JoinTable()
   roles: Role[];
}

@Entity()
export class Role {
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   name: string;

   @ManyToMany(() => User, user => user.roles)
   users: User[];
}
```

#### Decoradores Comuns

- `@OneToMany`: Define um relacionamento de um-para-muitos.
- `@ManyToOne`: Define um relacionamento de muitos-para-um.
- `@OneToOne`: Define um relacionamento de um-para-um.
- `@ManyToMany`: Define um relacionamento de muitos-para-muitos.
- `@JoinColumn`: Usado em relacionamentos de um-para-um para especificar a coluna de junção.
- `@JoinTable`: Usado em relacionamentos de muitos-para-muitos para especificar a tabela de junção.

Esses decoradores são essenciais para configurar corretamente as relações no banco de dados e garantir que as consultas reflitam a lógica desejada.

### 5. Persistência de Dados
As entidades são utilizadas pelos repositórios para realizar operações de CRUD (**Create, Read, Update, Delete**) no banco de dados. Por meio dos repositórios, podemos buscar registros, salvar novos dados ou atualizar registros existentes.

Por exemplo:

```typescript
const userRepository = dataSource.getRepository(User);

// Criar um novo usuário
const newUser = userRepository.create({ name: "João", email: "joao@example.com" });
await userRepository.save(newUser);

// Buscar todos os usuários
const users = await userRepository.find();

// Atualizar um usuário
const userToUpdate = await userRepository.findOneBy({ id: 1 });
if (userToUpdate) {
   userToUpdate.name = "João Silva";
   await userRepository.save(userToUpdate);
}
```

Essa abordagem simplifica o trabalho com dados, especialmente em aplicações com estruturas complexas.

### 6. Lógica de Negócio
Embora a lógica de negócios mais complexa geralmente seja implementada em serviços, as entidades podem conter métodos para calcular valores derivados de seus atributos ou verificar condições específicas.

Por exemplo:

```typescript
@Entity()
export class Product {
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   name: string;

   @Column('decimal')
   price: number;

   @Column('int')
   stock: number;

   // Método para verificar disponibilidade
   isAvailable(): boolean {
      return this.stock > 0;
   }

   // Método para calcular desconto
   calculateDiscount(discountRate: number): number {
      return this.price * (1 - discountRate);
   }
}
```

Esse exemplo mostra como a entidade pode incluir métodos para manipular seus dados de maneira orientada a objetos.
