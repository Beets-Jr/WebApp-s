# Interfaces e Tipos (Interfaces)

Esta pasta contém as definições de tipos TypeScript que estabelecem os contratos de dados utilizados em toda a aplicação.

## 🗂 Arquivos

### `User.ts`
Define as interfaces relacionadas a usuários do sistema.

#### Interfaces:
```typescript
// Representa um usuário completo no sistema
interface User {
  id: string;          // ID único do usuário
  name: string;        // Nome completo
  email: string;       // Email (único)
  role: 'admin' | 'user'; // Papel/função no sistema
  createdAt: Date;     // Data de criação
  updatedAt: Date;     // Data da última atualização
}

// DTO para criação de usuário
interface CreateUserDTO {
  name: string;
  email: string;
  password: string;
  role?: 'admin' | 'user';
}

// DTO para atualização de usuário
interface UpdateUserDTO {
  name?: string;
  email?: string;
  role?: 'admin' | 'user';
}
```

## 🔧 Propósito
- Definir contratos de dados
- Garantir type safety
- Documentar estruturas de dados
- Facilitar manutenção
- Prover autocompletion no IDE

## 📋 Boas Práticas
1. Manter interfaces simples e focadas
2. Documentar campos complexos
3. Usar tipos específicos em vez de `any`
4. Separar interfaces por domínio
5. Criar DTOs específicos para cada operação
6. Usar tipos literais quando apropriado
7. Manter compatibilidade com o banco de dados

## 🔄 Padrões Comuns
- Sufixo `DTO` para objetos de transferência de dados
- Sufixo `Response` para respostas de API
- Prefixo `I` opcional para interfaces
- Separação entre modelo e DTO
- Uso de tipos utilitários do TypeScript

## 🛡️ Responsabilidades
- Definição de tipos
- Contratos de dados
- Validação em tempo de compilação
- Documentação de estruturas
- Suporte ao desenvolvimento 