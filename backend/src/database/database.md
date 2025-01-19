# Configuração do TypeORM com Reflect Metadata e Dotenv

Este documento explica como configurar o TypeORM utilizando Reflect Metadata e Dotenv, além de como ocorre a inicialização do DataSource e o que ele representa.

## Dependências

Primeiro, vamos importar as dependências necessárias:

```typescript
import "reflect-metadata";
import { DataSource } from "typeorm";
import { CreateUsersTable1727265827543 } from './migrations/1727265827543-CreateUsersTable';
import User from "../entities/User";
import dotenv from 'dotenv';

dotenv.config();
```

## Configuração do DataSource

O `DataSource` é uma classe do TypeORM que representa a conexão com o banco de dados. A configuração do `DataSource` inclui informações como o tipo de banco de dados, host, porta, usuário, senha, nome do banco de dados, entidades, migrações e assinantes.

```typescript
export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || "3306", 10),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: false,
    logging: false,
    entities: [User],
    migrations: [CreateUsersTable1727265827543],
    subscribers: [],
});
```

> **Campos da configuração do DataSource**:
> - **type**: O tipo de banco de dados (por exemplo, "mysql").
> - **host**: O endereço do servidor do banco de dados.
> - **port**: A porta na qual o banco de dados está rodando.
> - **username**: O nome de usuário para autenticação no banco de dados.
> - **password**: A senha para autenticação no banco de dados.
> - **database**: O nome do banco de dados a ser utilizado.
> - **synchronize**: Define se o esquema do banco de dados deve ser sincronizado automaticamente.
> - **logging**: Define se as operações de banco de dados devem ser exibidas no console.
> - **entities**: Uma lista de entidades que o TypeORM deve gerenciar.
> - **migrations**: Uma lista de migrações que o TypeORM deve aplicar.
> - **subscribers**: Uma lista de assinantes de eventos do TypeORM.


## Inicialização do DataSource

Para inicializar o `DataSource`, criamos uma função assíncrona que chama o método `initialize` do `AppDataSource`. Este método estabelece a conexão com o banco de dados utilizando as configurações fornecidas.

```typescript
async function initializeDataSource() {
    try {
        await AppDataSource.initialize();
        console.log("Data Source has been initialized!");
    } catch (error) {
        console.error("Error during Data Source initialization:", error);
    }
}

// Chamar a função para inicializar o DataSource
initializeDataSource();
```

## Explicação das Dependências

- **reflect-metadata**: É uma biblioteca que adiciona suporte a metadados de reflexão no JavaScript. O TypeORM utiliza esta biblioteca para manipular metadados das entidades.
- **typeorm**: É um ORM (Object-Relational Mapper) para TypeScript e JavaScript que facilita a interação com bancos de dados.
- **dotenv**: É uma biblioteca que carrega variáveis de ambiente de um arquivo `.env` para `process.env`, permitindo configurar a aplicação de forma segura e flexível.
