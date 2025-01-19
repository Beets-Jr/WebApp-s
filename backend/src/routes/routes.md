# Rotas na Arquitetura MVC

## Introdução

Na arquitetura MVC (Model-View-Controller), as rotas pertencem à camada de **Controller**, desempenhando um papel essencial na interação entre o cliente e o servidor. Elas definem como as requisições HTTP são tratadas e direcionam para os controladores apropriados.

As rotas são responsáveis por:

1. Definir os caminhos da URL que a aplicação irá reconhecer.
2. Especificar o método HTTP (GET, POST, PUT, DELETE, etc.) associado a cada caminho.
3. Redirecionar as requisições para os controladores apropriados para tratamento.

---

## Organização das Rotas

### 1. Estrutura de Diretórios

Normalmente, as rotas são organizadas em um arquivo dedicado para cada módulo ou recurso da aplicação. Por exemplo:

```
/src
  /routes
    userRoutes.ts
    productRoutes.ts
    authRoutes.ts
```

Essa abordagem modular facilita a manutenção e escalabilidade do projeto.

### 2. Definição de Rotas

Cada arquivo de rota importa o roteador do framework utilizado (por exemplo, `express.Router()` no Express) e define os caminhos e controladores associados. No final, o roteador é exportado para ser utilizado no servidor principal.

Exemplo de um arquivo de rotas para usuários:

```typescript
import { Router } from "express";
import userController from "../controllers/userController";

const router = Router();

// Rota para obter todos os usuários
router.get("/", userController.getAllUsers);

// Rota para obter um usuário por ID
router.get("/:id", userController.getUserById);

// Rota para criar um novo usuário
router.post("/", userController.createUser);

// Rota para atualizar um usuário
router.put("/:id", userController.updateUser);

// Rota para deletar um usuário
router.delete("/:id", userController.deleteUser);

export default router;
```

---

## Como Funciona

### 1. Definição de Caminhos e Métodos HTTP

Os métodos do roteador (`get`, `post`, `put`, `delete`) indicam o tipo de operação a ser realizada:

- **GET**: Recupera informações do servidor.
- **POST**: Envia dados para o servidor para criação.
- **PUT**: Atualiza dados existentes no servidor.
- **DELETE**: Remove dados do servidor.

Cada caminho é associado a uma função no controlador que lida com a lógica correspondente.

### 2. Middleware

Um **middleware** é uma função intermediária usada em frameworks como Express.js para processar requisições e respostas antes que elas alcancem o manipulador final da rota. Ele pode realizar tarefas como autenticação, registro de logs, manipulação de erros, ou adição de cabeçalhos. Middlewares podem ser aplicados globalmente, a um conjunto de rotas, ou a uma rota específica, permitindo modularidade e reutilização de código no servidor.

As rotas podem utilizar middlewares para adicionar lógica adicional, como autenticação ou validação.

Exemplo de uma rota com middleware de autenticação:

```typescript
import authMiddleware from "../middlewares/authMiddleware";

router.get("/protected", authMiddleware, userController.getProtectedResource);
```

Aqui, o middleware `authMiddleware` verifica se o usuário está autenticado antes de permitir o acesso ao controlador.

### 3. Parâmetros de Rota

Parâmetros são utilizados para capturar valores dinâmicos diretamente da URL.

Exemplo:

```typescript
router.get("/users/:id", userController.getUserById);
```

No controlador, o parâmetro pode ser acessado assim:

```typescript
const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params; // Captura o ID da URL
  const user = await userService.getUserById(Number(id));
  if (!user) return res.status(404).json({ message: "Usuário não encontrado" });
  res.json(user);
};
```

### 4. Query Strings

As rotas também podem lidar com query strings para buscar informações adicionais:

```typescript
// /search?name=John&age=30 é a query string 

router.get("/search", userController.searchUsers);
```

No controlador:

```typescript
const searchUsers = async (req: Request, res: Response) => {
  const { name } = req.query; // Captura a query string ?name=...
  const users = await userService.searchUsersByName(name as string);
  res.json(users);
};
```

---

## Integração com o Servidor Principal

As rotas definidas em módulos individuais são importadas e integradas ao servidor principal da aplicação.

Exemplo de integração:

```typescript
import express from "express";
import cors from "cors";
import routers from "./routes/routes";

const app = express();

app.use(cors());

app.use(express.json());

app.use(routers);

app.listen(3333, () => {
  console.log("Server started on port 3333.");
});

```

---

## Boas Práticas

1. **Modularização:** Separe as rotas por funcionalidade para facilitar a organização do código.
2. **Documentação:** Documente claramente as rotas, métodos HTTP, parâmetros e respostas esperadas.
3. **Validação:** Utilize middlewares para validar entradas antes de enviar ao controlador.
4. **Erro e Logs:** Garanta que erros sejam tratados corretamente e que logs relevantes sejam registrados.
5. **Autenticação e Autorização:** Implemente middlewares para proteger rotas sensíveis.

---

## Resmumo de Rotas e Controlador de rotas

Arquivo de rotas:

```typescript
import { Router } from "express";
import userController from "../controllers/userController";
import authMiddleware from "../middlewares/authMiddleware";

const router = Router();

router.get("/", authMiddleware, userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.post("/", userController.createUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

export default router;
```

Arquivo do servidor principal:

```typescript
const app = express();

app.use(cors());

app.use(express.json());

app.use(uploadRouter);
app.use(routers);

app.listen(3333, () => {
  console.log("Server started on port 3333.");
});
```

Com essas definições, as rotas estão configuradas para tratar requisições relacionadas a usuários, com autenticação aplicada onde necessário e suporte a operações CRUD completas.

