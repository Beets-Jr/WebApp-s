# Middlewares

Esta pasta contém os middlewares do Express, que são funções intermediárias executadas durante o ciclo de vida das requisições HTTP.

## 🗂 Arquivos

### `auth.ts`
Middleware de autenticação que protege rotas privadas.

#### Funcionalidades:
- Verifica presença do token JWT
- Valida token com Firebase Auth
- Adiciona informações do usuário à requisição
- Bloqueia acessos não autorizados
- Gerencia diferentes níveis de acesso

#### Uso:
```typescript
// Proteger uma rota
router.get('/private', authMiddleware, controller.method);

// Acessar usuário na rota
router.get('/me', authMiddleware, (req, res) => {
  const user = req.user; // Informações do usuário autenticado
});
```

### `error.ts`
Middleware global de tratamento de erros.

#### Funcionalidades:
- Captura erros não tratados
- Formata mensagens de erro
- Determina status HTTP apropriado
- Logs de erro estruturados
- Respostas padronizadas

#### Exemplo de Resposta:
```json
{
  "status": "error",
  "message": "Descrição amigável do erro",
  "details": {} // Detalhes adicionais em desenvolvimento
}
```

## 🔧 Propósito
- Processar requisições antes/depois dos controllers
- Adicionar funcionalidades transversais
- Validar requisições
- Modificar objetos request/response
- Interromper ciclo de requisição quando necessário

## 📋 Boas Práticas
1. Manter middlewares focados e específicos
2. Documentar comportamentos e efeitos colaterais
3. Tratar erros adequadamente
4. Não modificar objetos req/res desnecessariamente
5. Usar async/await corretamente
6. Implementar logs apropriados
7. Seguir o princípio de responsabilidade única

## 🔄 Fluxo de Execução
1. Requisição recebida
2. Middlewares globais
3. Middlewares específicos da rota
4. Controller
5. Middlewares de erro (se necessário)
6. Resposta enviada

## 🛡️ Responsabilidades
- Autenticação e Autorização
- Validação de dados
- Logging
- Tratamento de erros
- Modificação de requisição/resposta
- Cache
- Compressão
- CORS
- Rate Limiting 