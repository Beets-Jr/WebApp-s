# Passo a Passo para a Criação de uma Migration

## O que é uma Migration?

Uma migration é uma forma de versionar o esquema do banco de dados, permitindo que você aplique e reverta mudanças de forma controlada. Ela é útil para manter o histórico de alterações no banco de dados e garantir que todos os ambientes (desenvolvimento, teste, produção) estejam sincronizados.

## Passo a Passo

### 1. Criar uma Migration

Para criar uma migration, você pode usar a CLI do TypeORM. Execute o seguinte comando no terminal:

```bash
typeorm migration:create -n NomeDaMigration
```

### 2. Editar a Migration

Após criar a migration, você encontrará um arquivo gerado na pasta `src/database/migrations`. Edite esse arquivo para definir as operações que deseja realizar no banco de dados. Exemplo de criação de uma tabela de usuários:

```typescript
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsersTable1627265827543 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        length: '100',
                        isNullable: false,
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        length: '100',
                        isNullable: false,
                        isUnique: true,
                    },
                    {
                        name: 'password',
                        type: 'varchar',
                        length: '100',
                        isNullable: false,
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }
}
```

### 3. Executar a Migration

Para aplicar a migration no banco de dados, execute o seguinte comando:

```bash
typeorm migration:run
```

### 4. Reverter a Migration

Se precisar reverter a migration, execute:

```bash
typeorm migration:revert
```

## Possibilidades de Operações

Com migrations, você pode realizar diversas operações no banco de dados, tais como:

- Criar e remover tabelas
- Adicionar, modificar e remover colunas
- Criar e remover índices
- Adicionar e remover chaves estrangeiras


```typescript
export class ModifyUsersTable1727265827543 implements MigrationInterface {
   public async up(queryRunner: QueryRunner): Promise<void> {
      // Adicionar uma nova coluna
      await queryRunner.addColumn("users", new TableColumn({
         name: "age",
         type: "int",
         isNullable: true,
      }));

      // Modificar uma coluna existente
      await queryRunner.changeColumn("users", "name", new TableColumn({
         name: "name",
         type: "varchar",
         length: "100",
      }));

      // Adicionar uma chave estrangeira
      await queryRunner.createForeignKey("users", new TableForeignKey({
         columnNames: ["role_id"],
         referencedColumnNames: ["id"],
         referencedTableName: "roles",
         onDelete: "CASCADE",
      }));
   }

   public async down(queryRunner: QueryRunner): Promise<void> {
      // Remover a chave estrangeira
      const table = await queryRunner.getTable("users");
      const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf("role_id") !== -1);
      await queryRunner.dropForeignKey("users", foreignKey);

      // Remover a coluna adicionada
      await queryRunner.dropColumn("users", "age");

      // Reverter a modificação da coluna
      await queryRunner.changeColumn("users", "name", new TableColumn({
         name: "name",
         type: "varchar",
         length: "255",
      }));
   }
}
```

As migrations são uma ferramenta poderosa para gerenciar a evolução do esquema do banco de dados de forma segura e controlada.