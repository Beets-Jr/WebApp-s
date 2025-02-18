# Template Base de Projetos

Template base para projetos da Beets Jr, com frontend em React e backend em Node.js.

## 🚀 Tecnologias

### Frontend
- React
- Material-UI
- Styled Components
- React Router DOM
- Axios
- TypeScript
- Vite

### Backend
- Node.js
- Express
- TypeScript
- Prisma
- PostgreSQL
- JWT
- Jest
- Docker

## 📁 Estrutura do Projeto

```
.
├── frontend/           # Aplicação React
│   ├── src/
│   │   ├── components/
│   │   ├── contexts/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── styles/
│   │   └── utils/
│   └── README.md
│
├── backend/            # API Node.js
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── interfaces/
│   │   ├── middlewares/
│   │   ├── repositories/
│   │   ├── routes/
│   │   └── services/
│   └── README.md
│
└── README.md          # Este arquivo
```

## 🔥 Configuração do Firebase

### 1. Criar Projeto no Firebase Console
1. Acesse o [Firebase Console](https://console.firebase.google.com/)
2. Clique em "Adicionar projeto"
3. Digite o nome do projeto (ex: "baserepo-dev")
4. Desative o Google Analytics (opcional)
5. Clique em "Criar projeto"

### 2. Configurar Authentication
1. No menu lateral, clique em "Authentication"
2. Em "Sign-in method", habilite "Email/Password"

### 3. Configurar Firestore
1. No menu lateral, clique em "Firestore Database"
2. Clique em "Criar banco de dados"
3. Escolha "Iniciar no modo de teste"
4. Selecione a região mais próxima (ex: "us-east1")

### 4. Gerar Credenciais do Service Account
1. No menu lateral, clique em "Configurações do Projeto" (ícone de engrenagem)
2. Vá para a aba "Contas de serviço"
3. Clique em "Gerar nova chave privada"
4. Salve o arquivo JSON gerado

### 5. Configurar Variáveis de Ambiente
1. No backend, crie um arquivo `.env` baseado no `.env.example`
2. Preencha as variáveis com os dados do arquivo JSON baixado:
```env
FIREBASE_TYPE="service_account"
FIREBASE_PROJECT_ID="seu-projeto-id"
FIREBASE_PRIVATE_KEY_ID="chave-privada-id"
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nSua-Chave-Privada\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL="email-do-firebase@seu-projeto.iam.gserviceaccount.com"
FIREBASE_CLIENT_ID="seu-client-id"
FIREBASE_AUTH_URI="https://accounts.google.com/o/oauth2/auth"
FIREBASE_TOKEN_URI="https://oauth2.googleapis.com/token"
FIREBASE_AUTH_PROVIDER_X509_CERT_URL="https://www.googleapis.com/oauth2/v1/certs"
FIREBASE_CLIENT_X509_CERT_URL="https://www.googleapis.com/robot/v1/metadata/x509/seu-projeto.iam.gserviceaccount.com"
FIREBASE_UNIVERSE_DOMAIN="googleapis.com"
```

⚠️ **IMPORTANTE:**
- Nunca compartilhe ou comite o arquivo de credenciais do Firebase
- Mantenha o arquivo `.env` no `.gitignore`
- Em produção, use variáveis de ambiente seguras
- Faça backup das credenciais em local seguro

## 🔧 Instalação

1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
```

2. Instale as dependências do frontend
```bash
cd frontend
npm install
# ou
yarn install
```

3. Instale as dependências do backend
```bash
cd ../backend
npm install
# ou
yarn install
```

4. Configure as variáveis de ambiente
```bash
# Frontend
cd ../frontend
cp .env.example .env

# Backend
cd ../backend
cp .env.example .env
```

5. Execute as migrações do banco de dados
```bash
cd ../backend
npx prisma migrate dev
```

6. Inicie os servidores

Em um terminal:
```bash
cd frontend
npm run dev
# ou
yarn dev
```

Em outro terminal:
```bash
cd backend
npm run dev
# ou
yarn dev
```

## 📚 Scripts Disponíveis

### Frontend
- `dev`: Inicia o servidor de desenvolvimento
- `build`: Gera a build de produção
- `preview`: Visualiza a build de produção
- `lint`: Executa o linter
- `test`: Executa os testes

### Backend
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

1. O usuário faz login com email e senha
2. O backend retorna um token JWT
3. O token é armazenado no localStorage
4. O token é enviado no header `Authorization` em todas as requisições
5. O token expira após 24 horas

## 🎨 Temas

A aplicação utiliza o Material-UI para tematização:

- Cores primárias e secundárias customizadas
- Tipografia personalizada
- Componentes estilizados
- Modo escuro/claro
- Responsividade

## ⚡ Performance

Otimizações implementadas:

### Frontend
- Code splitting
- Lazy loading
- Memoização
- Tree shaking
- Bundle optimization

### Backend
- Caching
- Rate limiting
- Compression
- Connection pooling
- Query optimization

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

### Frontend
- Jest
- React Testing Library
- Cypress
- Testes unitários
- Testes de integração
- Testes e2e

### Backend
- Jest
- Supertest
- Testes unitários
- Testes de integração
- Testes e2e

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

> Obs.: Em caso de dúvidas ou sugestões, tratar com Gustavo Moraes, Diretor de Projetos.
> Email: gustavo.moraes@beetsjr.com

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
