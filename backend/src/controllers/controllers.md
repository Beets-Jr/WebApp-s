# UserController

## Papel do Controller na Arquitetura MVC

Na arquitetura MVC (Model-View-Controller), o Controller atua como um intermediário entre o Model e a View. Ele é responsável por receber as requisições do usuário, processar essas requisições (geralmente interagindo com o Model) e retornar a resposta apropriada para a View.

### Funções do Controller:

1. **Receber Requisições**: O Controller recebe as requisições HTTP do cliente. Ele atua como o ponto de entrada para todas as interações do usuário com o sistema.
2. **Processar Dados**: Ele pode validar e processar os dados recebidos. Isso inclui verificar a integridade e a autenticidade dos dados, além de aplicar regras de negócio.
3. **Interagir com o Model**: O Controller chama métodos do Model para manipular os dados. Ele pode criar, ler, atualizar ou deletar informações no banco de dados através do Model.
4. **Atualizar a View**: Após processar os dados, o Controller seleciona a View apropriada para retornar ao cliente. Isso pode incluir a renderização de templates HTML ou o envio de respostas JSON para APIs RESTful.
5. **Gerenciar Sessões e Autenticação**: O Controller pode lidar com a autenticação de usuários e gerenciar sessões, garantindo que apenas usuários autorizados possam acessar determinados recursos.
6. **Tratar Exceções**: Ele é responsável por capturar e tratar exceções que possam ocorrer durante o processamento das requisições, garantindo que o usuário receba mensagens de erro apropriadas e que o sistema continue funcionando corretamente.
7. **Encaminhar Requisições**: Em alguns casos, o Controller pode encaminhar requisições para outros serviços ou microserviços, atuando como um orquestrador dentro da aplicação.

Essas funções tornam o Controller uma peça fundamental na arquitetura MVC, garantindo que a aplicação funcione de maneira coesa e eficiente.

### Exemplo: UserController.ts

No arquivo `UserController.ts`, podemos ver um exemplo de como um Controller é implementado. Este arquivo geralmente contém métodos para lidar com operações relacionadas aos usuários, como criar, atualizar, deletar e listar usuários.

```typescript
const userRouter = Router();

// Rota GET para buscar todos os usuários ou um usuário específico pelo email
userRouter.get('/', async (req: Request, res: Response): Promise<Response> => {
    const { email } = req.query;

    try {
        if (email) {
            const user = await UserRepository.getUserInfoByEmail(email as string);
            if (!user) {
                return res.status(404).json({ message: "User not found." });
            }
            return res.status(200).json(user);
        }

        // Se não for passado o email, busque todos os usuários
        const users = await UserRepository.getUsers();
        return res.status(200).json(users);
    } catch (error) {
        console.error("Error finding user(s):", error);
        return res.status(500).json({ message: "Error finding users." });
    }
});

export default userRouter;
```
