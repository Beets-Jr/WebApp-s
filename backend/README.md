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

## 🔧 Instalação

1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo/backend
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

4. Execute as migrações do banco de dados
```bash
npx prisma migrate dev
```

5. Inicie o servidor de desenvolvimento
```bash
npm run dev
# ou
yarn dev
```

## 📚 Scripts Disponíveis

- `dev`: Inicia o servidor de desenvolvimento
- `build`: Gera a build de produção
- `start`: Inicia o servidor em produção
- `test`: Executa os testes
- `lint`: Executa o linter
- `migrate`: Executa as migrações do banco

## 🌐 Endpoints

### Autenticação
- `POST /api/auth/login`: Login de usuário
- `POST /api/auth/register`: Registro de usuário
- `POST /api/auth/refresh`: Refresh token
- `POST /api/auth/logout`: Logout de usuário

### Usuários
- `GET /api/users`: Lista usuários
- `GET /api/users/:id`: Obtém usuário
- `POST /api/users`: Cria usuário
- `PUT /api/users/:id`: Atualiza usuário
- `DELETE /api/users/:id`: Remove usuário

### Dashboard
- `GET /api/dashboard`: Dados do dashboard
- `GET /api/dashboard/stats`: Estatísticas
- `GET /api/dashboard/chart`: Dados do gráfico

## 🔒 Autenticação

A autenticação é feita via JWT (JSON Web Token):

1. O usuário envia credenciais
2. O servidor valida e gera token
3. O token é enviado ao cliente
4. O cliente envia token no header
5. O servidor valida token em cada request

## 🗃️ Banco de Dados

Utilizamos PostgreSQL com Prisma:

- Migrations automáticas
- Type safety
- Query builder
- Modelagem relacional
- Seeds para desenvolvimento
- Backups automáticos

## ⚡ Performance

Otimizações implementadas:

- Caching
- Rate limiting
- Compression
- Connection pooling
- Query optimization
- Load balancing
- Clustering

## 🔐 Segurança

Medidas de segurança:

- HTTPS
- JWT
- CORS
- Helmet
- Rate limiting
- Input validation
- SQL injection protection
- XSS protection
- CSRF protection
- Password hashing
- Error masking

## 🧪 Testes

Suíte de testes com Jest:

- Testes unitários
- Testes de integração
- Testes e2e
- Cobertura de código
- Mocks
- Fixtures
- CI/CD

## 📊 Logging

Sistema de logs:

- Winston
- Níveis de log
- Rotação de arquivos
- Formatação
- Timestamps
- Contexto
- Alertas

## 🐳 Docker

Containerização com Docker:

- Dockerfile otimizado
- Docker Compose
- Multi-stage builds
- Volume management
- Network configuration
- Environment variables
- Health checks

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

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
