import { Router } from 'express';
import { usersRouter } from './users';
import { authMiddleware } from '@/middlewares/auth';

const router = Router();

// Aplica o middleware de autenticação a TODAS as rotas definidas em 'usersRouter'
// Ninguém pode acessar /users, /users/:id, etc., sem um token válido.
router.use('/users', authMiddleware, usersRouter);

// Exemplo de outra rota protegida
router.get('/me', authMiddleware, (req, res) => {
  // Graças ao middleware, req.user contém os dados do usuário do token
  if (req.user) {
    return res.json({
      id: req.user.uid,
      email: req.user.email,
      name: req.user.name,
    });
  }
  return res.status(404).json({ error: 'Usuário não encontrado' });
});

export { router };
