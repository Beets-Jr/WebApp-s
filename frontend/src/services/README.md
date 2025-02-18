# Serviços (Services)

Esta pasta contém os serviços responsáveis pela comunicação com APIs externas e outras integrações.

## 🗂 Arquivos

### `api.js`
Configuração e instância do Axios para comunicação com o backend.

```typescript
interface ApiConfig {
  baseURL: string;
  timeout: number;
  headers: {
    'Content-Type': string;
    'Authorization'?: string;
  }
}

// Uso
import api from './api';
const response = await api.get('/users');
```

## 🔧 Propósito
- Comunicação com APIs
- Gerenciamento de requisições
- Interceptação de requests/responses
- Tratamento de erros
- Cache de dados
- Autenticação
- Retry logic

## 📋 Boas Práticas
1. Centralizar configurações
2. Interceptar requisições
3. Tratar erros globalmente
4. Implementar timeout
5. Usar TypeScript
6. Documentar endpoints
7. Implementar retry
8. Gerenciar cache
9. Validar responses
10. Logging

## 🔄 Padrões Comuns
- Singleton
- Factory
- Adapter
- Proxy
- Observer
- Strategy
- Repository

## 🛡️ Responsabilidades
- HTTP requests
- Autenticação
- Autorização
- Cache
- Retry
- Logging
- Error handling
- Data transformation

## 📚 Exemplos

### Configuração Básica
```typescript
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3001/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Interceptor de request
api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('@App:token');
    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

// Interceptor de response
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      // Logout user
    }
    return Promise.reject(error);
  }
);

export default api;
```

## ⚡ Performance
- Caching
- Rate limiting
- Compression
- Connection pooling
- Request batching
- Response streaming
- Prefetching

## 🔒 Segurança
- HTTPS
- JWT
- CORS
- Rate limiting
- Input validation
- Output sanitization
- Error masking

### `auth.js`
Serviço de autenticação:
- `login(email, password)`: Login
- `logout()`: Logout
- `getToken()`: Obtém token JWT
- `setToken(token)`: Armazena token JWT 