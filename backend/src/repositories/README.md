# Repositórios (Repositories)

Esta pasta contém os repositórios que encapsulam a lógica de acesso a dados, isolando as operações do Firebase (ou qualquer outro banco de dados) do resto da aplicação.

## 🗂 Arquivos

### `UserRepository.ts`
Repositório responsável por operações de CRUD de usuários no Firebase.

#### Operações:
- `create`: Cria novo usuário
  ```typescript
  async create(data: CreateUserDTO): Promise<User>
  ```
  - Cria usuário no Firebase Auth
  - Armazena dados adicionais no Firestore
  - Retorna usuário completo

- `findAll`: Lista todos os usuários
  ```typescript
  async findAll(): Promise<User[]>
  ```
  - Suporta paginação
  - Permite filtros
  - Ordena resultados

- `findById`: Busca usuário por ID
  ```typescript
  async findById(id: string): Promise<User | null>
  ```
  - Combina dados do Auth e Firestore
  - Trata usuário não encontrado

- `update`: Atualiza dados do usuário
  ```typescript
  async update(id: string, data: UpdateUserDTO): Promise<User>
  ```
  - Atualiza Auth se necessário
  - Atualiza Firestore
  - Valida existência

- `delete`: Remove usuário
  ```typescript
  async delete(id: string): Promise<void>
  ```
  - Remove do Auth
  - Remove do Firestore
  - Remove dados relacionados

## 🔧 Propósito
- Abstrair acesso ao banco de dados
- Centralizar operações de dados
- Implementar padrão Repository
- Facilitar testes e mocks
- Permitir troca de banco de dados

## 📋 Boas Práticas
1. Usar tipos/interfaces para dados
2. Implementar tratamento de erros
3. Validar dados antes de operações
4. Manter operações atômicas
5. Documentar comportamentos específicos
6. Implementar logs de operações
7. Usar transações quando necessário

## 🔄 Padrões
- Métodos assíncronos
- Nomes descritivos
- Operações CRUD básicas
- Retornos tipados
- Tratamento de erros consistente

## 🛡️ Responsabilidades
- Acesso ao banco de dados
- Operações CRUD
- Queries complexas
- Transações
- Cache de dados
- Validações de persistência
- Mapeamento de dados 