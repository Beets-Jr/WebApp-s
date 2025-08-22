# Configurações (Config)

Esta pasta contém as configurações fundamentais do projeto, responsáveis por inicializar e configurar serviços externos e middlewares.

## 🗂 Arquivos

### `firebase.ts`
Configuração e inicialização do Firebase Admin SDK.
- Estabelece a conexão com o Firebase
- Configura as credenciais de serviço
- Inicializa os serviços do Firebase (Auth, Firestore)
- Exporta instâncias configuradas para uso em toda a aplicação

### `express.ts`
Configuração do servidor Express e seus middlewares globais.
- Configuração de CORS
- Parser de JSON
- Configurações de segurança
- Middlewares globais da aplicação

## 🔧 Propósito
- Centralizar configurações em um único lugar
- Facilitar a manutenção e alteração de configurações
- Garantir que serviços externos sejam inicializados corretamente
- Prover uma interface consistente para o resto da aplicação

## 📋 Boas Práticas
1. Manter configurações sensíveis em variáveis de ambiente
2. Documentar todas as opções de configuração
3. Implementar validações de configuração
4. Manter configurações de desenvolvimento e produção separadas 