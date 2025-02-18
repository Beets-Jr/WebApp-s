# Contextos (Contexts)

Esta pasta contém os contextos React que gerenciam estados globais da aplicação, permitindo o compartilhamento de dados entre componentes.

## 🗂 Arquivos

### `AuthContext.jsx`
Contexto responsável pelo gerenciamento de autenticação.

#### Funcionalidades:
```typescript
interface AuthContext {
  user: User | null;        // Usuário atual
  signIn(credentials): Promise<void>;  // Login
  signUp(data): Promise<void>;        // Registro
  signOut(): void;                    // Logout
  isAuthenticated: boolean;           // Estado de autenticação
}
```

#### Responsabilidades:
- Gerenciamento de estado do usuário
- Autenticação com backend
- Armazenamento de token
- Controle de sessão
- Renovação de token
- Logout automático

## 🔧 Propósito
- Gerenciar estado global
- Evitar prop drilling
- Compartilhar lógica comum
- Centralizar regras de negócio
- Prover dados para componentes

## 📋 Boas Práticas
1. Separar contextos por domínio
2. Implementar error boundaries
3. Usar TypeScript
4. Documentar interfaces
5. Implementar loading states
6. Tratar erros adequadamente
7. Manter contextos focados

## 🔄 Padrões Comuns
- Provider pattern
- Composition
- Higher-order components
- Custom hooks
- Memoization
- Error boundaries
- Loading states

## 🛡️ Responsabilidades
- Gerenciamento de estado
- Lógica de negócio compartilhada
- Cache de dados
- Integração com APIs
- Persistência local
- Sincronização de estado
- Controle de acesso

## 📚 Uso
```jsx
// Provedor no App
<AuthProvider>
  <App />
</AuthProvider>

// Uso em componentes
function Component() {
  const { user, signOut } = useAuth();
  return (
    <button onClick={signOut}>
      Logout {user.name}
    </button>
  );
}
```

## 🔒 Segurança
- Validação de tokens
- Refresh tokens
- Proteção contra XSS
- Sanitização de dados
- Controle de sessão
- Logout automático
- Auditoria de ações 