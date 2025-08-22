# Serviços (Services)

Esta pasta contém a camada de serviços que implementa a lógica de negócio da aplicação, atuando como intermediária entre os controllers e repositories.

## 🗂 Arquivos

### `UserService.ts`
Serviço responsável pela lógica de negócio relacionada a usuários.

#### Funcionalidades:
- Criação de usuário
  ```typescript
  async create(data: CreateUserDTO): Promise<User>
  ```
  - Validação de dados
  - Verificação de duplicidade
  - Criptografia de senha
  - Criação de perfil

- Autenticação
  ```typescript
  async authenticate(email: string, password: string): Promise<AuthResponse>
  ```
  - Validação de credenciais
  - Geração de token
  - Registro de login

- Gerenciamento de perfil
  ```typescript
  async updateProfile(id: string, data: UpdateUserDTO): Promise<User>
  ```
  - Validação de permissões
  - Atualização seletiva
  - Notificações

## 🔧 Propósito
- Implementar regras de negócio
- Coordenar operações complexas
- Garantir consistência de dados
- Validar regras de domínio
- Orquestrar múltiplos repositories

## 📋 Boas Práticas
1. Separar responsabilidades
2. Implementar validações de negócio
3. Usar injeção de dependência
4. Manter serviços stateless
5. Documentar regras complexas
6. Implementar logs de operações
7. Usar transações quando necessário

## 🔄 Fluxo Típico
1. Recebe dados do controller
2. Valida regras de negócio
3. Coordena operações
4. Acessa repositories
5. Processa resultados
6. Retorna dados formatados

## 🛡️ Responsabilidades
- Regras de negócio
- Validações complexas
- Coordenação de operações
- Transformação de dados
- Notificações
- Logs de negócio
- Cache de operações

## 📊 Exemplos de Regras
- Validação de dados
- Permissões de acesso
- Limites de operações
- Cálculos de negócio
- Integração entre sistemas
- Notificações automáticas
- Auditoria de operações 