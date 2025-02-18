# Hooks Personalizados (Hooks)

Esta pasta contém hooks React personalizados que encapsulam lógica reutilizável e comportamentos comuns da aplicação.

## 🗂 Arquivos

### `useAuth.js`
Hook que fornece acesso ao contexto de autenticação.

#### API:
```typescript
interface UseAuth {
  user: User | null;              // Usuário atual
  loading: boolean;               // Estado de carregamento
  error: Error | null;            // Erro de autenticação
  signIn(credentials): Promise<void>;    // Login
  signUp(data): Promise<void>;          // Registro
  signOut(): void;                      // Logout
  updateProfile(data): Promise<void>;    // Atualização de perfil
}

// Uso
const { user, signIn, loading } = useAuth();
```

## 🔧 Propósito
- Reutilização de lógica
- Separação de concerns
- Composição de comportamentos
- Abstração de complexidade
- Gerenciamento de estado local

## 📋 Boas Práticas
1. Seguir regras de hooks
2. Manter hooks focados
3. Documentar parâmetros e retornos
4. Implementar cleanup
5. Usar TypeScript
6. Tratar erros
7. Implementar loading states

## 🔄 Padrões Comuns
- Composition
- Dependency injection
- Memoization
- Side effects
- Lifecycle management
- Error handling
- State management

## 🛡️ Responsabilidades
- Lógica reutilizável
- Gerenciamento de estado
- Side effects
- Integração com APIs
- Manipulação de dados
- Validações
- Comportamentos complexos

## 📚 Exemplos de Hooks
```typescript
// Hook de formulário
const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return { values, handleChange };
};

// Hook de fetch
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(url).then(res => {
      setData(res.data);
      setLoading(false);
    });
  }, [url]);
  return { data, loading };
};
```

## ⚡ Performance
- Memoização
- Debounce/throttle
- Cleanup effects
- Dependency arrays
- Lazy initialization
- Batch updates
- Conditional fetching 