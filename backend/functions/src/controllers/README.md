# Controladores (Controllers)

Esta pasta contém os controladores da aplicação, que são responsáveis por:

- Receber requisições HTTP
- Processar parâmetros e dados de entrada
- Coordenar a lógica de negócio através dos serviços
- Retornar respostas HTTP apropriadas

## 🗂 Arquivos

### `UserController.ts`

Controlador responsável por gerenciar operações relacionadas a usuários.

#### Endpoints:

- `POST /users` - Criação de usuário
  - Valida dados de entrada
  - Coordena criação no Auth e Firestore
  - Retorna usuário criado

- `GET /users` - Listagem de usuários
  - Suporta paginação e filtros
  - Retorna lista formatada

- `GET /users/:id` - Busca de usuário específico
  - Valida existência do usuário
  - Retorna dados detalhados

- `PUT /users/:id` - Atualização de usuário
  - Valida dados de atualização
  - Coordena atualização no Auth e Firestore
  - Retorna usuário atualizado

- `DELETE /users/:id` - Remoção de usuário
  - Valida permissões
  - Remove dados relacionados
  - Retorna status apropriado

## 🔧 Propósito

- Gerenciar o ciclo de vida das requisições HTTP
- Validar dados de entrada
- Coordenar chamadas aos serviços
- Formatar respostas de acordo com o padrão da API
- Tratar erros e exceções

## 📋 Boas Práticas

1. Manter controllers enxutos (thin controllers)
2. Delegar lógica de negócio para services
3. Implementar tratamento adequado de erros
4. Padronizar respostas de sucesso e erro
5. Documentar todos os endpoints
6. Validar dados de entrada
7. Implementar logs apropriados

## 🔄 Fluxo Típico

1. Recebe requisição HTTP
2. Valida dados/parâmetros
3. Chama serviço apropriado
4. Processa resultado
5. Retorna resposta formatada

## 🛡️ Responsabilidades

- Parsing de parâmetros
- Validação básica de entrada
- Chamada aos serviços corretos
- Formatação de resposta
- Tratamento de erros HTTP
- Gestão de status codes
