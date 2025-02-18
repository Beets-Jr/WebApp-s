# Rotas (Routes)

Esta pasta contém as definições de rotas da API, organizando os endpoints e conectando-os aos seus respectivos controladores.

## 🗂 Arquivos

### `index.ts`
Arquivo principal que combina todas as rotas da aplicação.
- Importa rotas específicas
- Define prefixos de rotas
- Configura middlewares globais
- Organiza versões da API

### `users.ts`
Rotas relacionadas a operações de usuários.

#### Endpoints:
```typescript
// Rotas públicas
POST /users          // Criar usuário
POST /login         // Login de usuário
POST /register      // Registro de usuário

// Rotas protegidas (requer autenticação)
GET    /users       // Listar usuários
GET    /users/:id   // Obter usuário específico
PUT    /users/:id   // Atualizar usuário
DELETE /users/:id   // Remover usuário
```

## 🔧 Propósito
- Definir endpoints da API
- Organizar rotas por domínio
- Conectar rotas aos controllers
- Aplicar middlewares específicos
- Documentar API

## 📋 Boas Práticas
1. Agrupar rotas por domínio
2. Usar verbos HTTP apropriados
3. Nomear rotas de forma clara
4. Versionar API quando necessário
5. Documentar parâmetros e respostas
6. Implementar validações de rota
7. Seguir padrões RESTful

## 🔄 Padrões REST
- GET: Buscar dados
- POST: Criar recursos
- PUT: Atualizar recursos
- DELETE: Remover recursos
- PATCH: Atualização parcial

## 🛡️ Responsabilidades
- Definição de endpoints
- Roteamento de requisições
- Aplicação de middlewares
- Versionamento da API
- Documentação de rotas
- Validação de parâmetros
- Organização de recursos

## 📚 Estrutura de URLs
- Usar substantivos para recursos
- Hierarquia clara de recursos
- Queries para filtros
- Parâmetros para identificação
- Versionamento via prefixo

## 🔒 Segurança
- Proteção de rotas sensíveis
- Validação de tokens
- Rate limiting
- Sanitização de parâmetros
- Prevenção de ataques comuns 