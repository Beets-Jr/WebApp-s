# Repositórios na Arquitetura MVC

## Introdução

Na arquitetura MVC (Model-View-Controller), os **repositórios** são responsáveis por interagir diretamente com o banco de dados, utilizando as entidades para mapear os dados. Eles fazem parte da camada de **Model** e servem como uma interface entre a lógica de negócios e o armazenamento persistente.

---

## Responsabilidades dos Repositórios

### 1. Gerenciamento de Operações CRUD
Os repositórios centralizam as operações de **Create**, **Read**, **Update** e **Delete**. Isso permite organizar e reutilizar consultas e manipulações de dados de forma eficiente e consistente.

#### Exemplo: Buscar Todos os Usuários

```typescript
const getUsers = (): Promise<IUser[]> => {
  return userRepository.find();
};
```

Neste exemplo, o método `find` do TypeORM retorna uma lista de todos os usuários no banco de dados.

---

### 2. Busca Específica por Critérios
Os repositórios permitem realizar buscas por critérios específicos, utilizando métodos como `findOneBy` ou `find` com condições.

#### Exemplo: Buscar um Usuário pelo Email

```typescript
const getUserByEmail = async (email: string): Promise<User | null> => {
  const user = await userRepository.findOneBy({ email });
  return user || null;
};
```

Esse método busca um usuário baseado em seu email. Caso não encontre nenhum usuário, retorna `null`.

---

### 3. Seleção Personalizada de Dados
Os repositórios podem criar objetos personalizados com base nos dados retornados, permitindo otimizar consultas e reduzir a quantidade de informações transferidas.

#### Exemplo: Obter Informações Específicas de um Usuário

```typescript
const getUserInfoByEmail = async (
  email: string
): Promise<IUserResponse | null> => {
  const user = await userRepository.findOneBy({ email });

  if (!user) return null;

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    image: user.image
  };
};
```

Esse exemplo demonstra como retornar apenas os campos necessários, economizando recursos e aumentando a eficiência da aplicação.

---

### 4. Criação de Novos Registros
Os repositórios permitem criar e salvar novos registros no banco de dados com os métodos `create` e `save`.

#### Exemplo: Criar um Usuário

```typescript
const createUser = async (userData: IUser): Promise<IUser> => {
  const newUser = userRepository.create(userData); // Cria uma instância do usuário
  await userRepository.save(newUser); // Salva no banco de dados
  return newUser;
};
```

Nesse exemplo, o método `create` inicializa uma nova instância da entidade, e o `save` persiste essa instância no banco de dados.

---

### 5. Atualização de Dados
Os repositórios permitem modificar registros existentes utilizando o método `save`.

#### Exemplo: Atualizar um Usuário

```typescript
const updateUser = async (
  id: number,
  userData: IUser
): Promise<IUser | null> => {
  const user = await userRepository.findOneBy({ id });
  if (!user) return null;

  user.name = userData.name;
  user.email = userData.email;

  await userRepository.save(user); // Salva as mudanças no banco de dados
  return user;
};
```

Este método verifica se o usuário existe antes de atualizar seus dados, garantindo consistência.

---

### 6. Exclusão de Registros
Os repositórios podem remover registros utilizando métodos como `remove` ou `delete`.

#### Exemplo: Deletar um Usuário

```typescript
const deleteUser = async (id: number): Promise<boolean> => {
  const user = await userRepository.findOneBy({ id });

  if (!user) return false;

  await userRepository.remove(user);
  return true;
};
```

Esse método verifica se o registro existe antes de excluí-lo, evitando erros.

---

## Vantagens do Uso de Repositórios

1. **Reutilização de Código**: Métodos padronizados centralizam a lógica de acesso a dados.
2. **Organização**: Separação clara entre lógica de negócios e operações de banco de dados.
3. **Facilidade de Testes**: Repositórios podem ser facilmente testados isoladamente com mocks ou bancos de dados em memória.
4. **Flexibilidade**: Permite otimizar e ajustar consultas conforme necessário.
