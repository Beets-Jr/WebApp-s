# Frontend da Aplicação

Este é o frontend da aplicação, desenvolvido com React, Material-UI e outras tecnologias modernas.

## 🚀 Tecnologias

- React
- Material-UI
- Styled Components
- React Router DOM
- Axios
- TypeScript
- Vite

## 📁 Estrutura de Pastas

```
src/
  ├── components/     # Componentes reutilizáveis
  ├── contexts/       # Contextos React (Auth, Theme, etc)
  ├── hooks/          # Hooks personalizados
  ├── pages/          # Páginas/rotas da aplicação
  ├── services/       # Serviços (API, etc)
  ├── styles/         # Estilos globais e temas
  └── utils/          # Funções utilitárias
```

## 🔧 Instalação

1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo/frontend
```

2. Instale as dependências
```bash
npm install
# ou
yarn install
```

3. Configure as variáveis de ambiente
```bash
cp .env.example .env
# Edite o arquivo .env com suas configurações
```

4. Inicie o servidor de desenvolvimento
```bash
npm run dev
# ou
yarn dev
```

## 📚 Scripts Disponíveis

- `dev`: Inicia o servidor de desenvolvimento
- `build`: Gera a build de produção
- `preview`: Visualiza a build de produção
- `lint`: Executa o linter
- `test`: Executa os testes

## 🌐 Endpoints

A aplicação se comunica com o backend através dos seguintes endpoints:

- `/api/auth/login`: Login de usuário
- `/api/auth/register`: Registro de usuário
- `/api/users`: CRUD de usuários
- `/api/dashboard`: Dados do dashboard

## 🔒 Autenticação

A autenticação é feita via JWT (JSON Web Token):

1. O usuário faz login com email e senha
2. O backend retorna um token JWT
3. O token é armazenado no localStorage
4. O token é enviado no header `Authorization` em todas as requisições
5. O token expira após 24 horas

## 🎨 Temas

A aplicação utiliza o Material-UI para tematização:

- Cores primárias e secundárias customizadas
- Tipografia personalizada
- Componentes estilizados
- Modo escuro/claro
- Responsividade

## 📱 Responsividade

A aplicação é totalmente responsiva:

- Mobile first
- Breakpoints customizados
- Layout adaptativo
- Componentes responsivos
- Menu mobile

## ⚡ Performance

Otimizações implementadas:

- Code splitting
- Lazy loading
- Memoização
- Tree shaking
- Bundle optimization
- Cache
- Compressão

## 🔐 Segurança

Medidas de segurança:

- HTTPS
- JWT
- CORS
- XSS Protection
- CSRF Protection
- Input Validation
- Error Handling

## 📖 Documentação

Cada pasta contém seu próprio README com:

- Propósito
- Estrutura
- Exemplos
- Boas práticas
- Padrões
- Responsabilidades

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes. 