# Backend da Aplicação

Este é o backend da aplicação, desenvolvido com Node.js, Express, TypeScript e outras tecnologias modernas.

## 🚀 Tecnologias

- Node.js
- Express
- TypeScript
- Prisma
- PostgreSQL
- JWT
- Jest
- Docker

## 📁 Estrutura de Pastas

```
src/
  ├── config/         # Configurações (banco, auth, etc)
  ├── controllers/    # Controladores das rotas
  ├── interfaces/     # Interfaces TypeScript
  ├── middlewares/    # Middlewares Express
  ├── repositories/   # Camada de acesso aos dados
  ├── routes/         # Rotas da API
  └── services/       # Lógica de negócio
```

## Prettier e ESLint

rodar `npx prettier --write .` em erros de linter, até se habituar a corrigi-los por conta

## 🔧 Instalação

1. Clone o repositório

```bash
git clone https://github.com/Beets-Jr/WebApp-s
cd WebApp-s/backend/functions
```

2. Instale as dependências

```bash
npm install
# ou
yarn install
```

3. Configure as variáveis de ambiente

```bash
cp .env.example .env
# Edite o arquivo .env com suas configurações
```

4. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

## 📚 Scripts Disponíveis

- `dev`: Inicia o servidor de desenvolvimento
- `build`: Gera a build de produção
- `start`: Inicia o servidor em produção
- `test`: Executa os testes
- `lint`: Executa o linter
- `migrate`: Executa as migrações do banco

## 🌐 Endpoints

### Usuários

- `GET /api/users`: Lista usuários
- `GET /api/users/:id`: Obtém usuário
- `POST /api/users`: Cria usuário
- `PUT /api/users/:id`: Atualiza usuário
- `DELETE /api/users/:id`: Remove usuário

## 🗃️ Banco de Dados

Utilizamos Firebase:

## ⚡ Performance

Otimizações implementadas:


## 🔐 Segurança

Medidas de segurança:

- HTTPS

## 🧪 Testes


## 📊 Logging

Sistema de logs:


## 🐳 Docker

Containerização com Docker:


## 📖 Documentação

Cada pasta contém seu próprio README com:

- Propósito
- Estrutura
- Exemplos
- Boas práticas
- Padrões
- Responsabilidades

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença da BEETS.
