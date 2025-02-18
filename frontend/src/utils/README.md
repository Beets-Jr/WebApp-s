# Utilitários (Utils)

Esta pasta contém funções utilitárias e helpers reutilizáveis em toda a aplicação.

## 🗂 Arquivos

### `format.js`
Funções para formatação de dados.

```typescript
interface FormatUtils {
  formatDate(date: Date): string;
  formatCurrency(value: number): string;
  formatCPF(cpf: string): string;
  formatPhone(phone: string): string;
}

// Uso
import { formatDate, formatCurrency } from './format';
const date = formatDate(new Date()); // 01/01/2024
const price = formatCurrency(1000); // R$ 1.000,00
```

### `validation.js`
Funções para validação de dados.

```typescript
interface ValidationUtils {
  isValidEmail(email: string): boolean;
  isValidCPF(cpf: string): boolean;
  isValidPhone(phone: string): boolean;
  isValidPassword(password: string): boolean;
}
```

## 🔧 Propósito
- Reutilização de código
- Formatação de dados
- Validação de dados
- Manipulação de strings
- Manipulação de datas
- Manipulação de números
- Helpers comuns
- Funções puras

## 📋 Boas Práticas
1. Funções puras
2. Documentação clara
3. Testes unitários
4. Tipagem forte
5. Modularização
6. Nomes descritivos
7. Tratamento de erros
8. Performance
9. Imutabilidade
10. Consistência

## 🔄 Padrões Comuns
- Pure functions
- Factory functions
- Currying
- Memoization
- Composition
- Type guards
- Error handling
- Data transformation

## 🛡️ Responsabilidades
- Formatação
- Validação
- Transformação
- Cálculos
- Conversões
- Sanitização
- Helpers
- Utilitários

## 📚 Exemplos

### Formatação
```typescript
// format.js
export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('pt-BR').format(date);
};

export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
};

export const formatCPF = (cpf: string): string => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
};

export const formatPhone = (phone: string): string => {
  return phone.replace(/(\d{2})(\d{5})(\d{4})/g, '($1) $2-$3');
};
```

### Validação
```typescript
// validation.js
export const isValidEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const isValidCPF = (cpf: string): boolean => {
  const numbers = cpf.replace(/[^\d]/g, '');
  if (numbers.length !== 11) return false;
  // Implementar validação completa de CPF
  return true;
};

export const isValidPassword = (password: string): boolean => {
  // Mínimo 8 caracteres, 1 letra maiúscula, 1 número
  const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  return regex.test(password);
};
```

## ⚡ Performance
- Memoização
- Lazy evaluation
- Otimização de loops
- Complexidade algorítmica
- Cache
- Debounce/throttle
- Batch processing

## 🔒 Segurança
- Sanitização de input
- Validação de dados
- Escape de strings
- Proteção XSS
- Proteção CSRF
- Rate limiting
- Input masking 