import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { authMiddleware } from '../middlewares/auth';

const usersRouter = Router();
const userController = new UserController();

// Rotas públicas
usersRouter.post('/', userController.create.bind(userController));

// Rotas protegidas
usersRouter.use(authMiddleware);
usersRouter.get('/', userController.findAll.bind(userController));
usersRouter.get('/:id', userController.findById.bind(userController));
usersRouter.put('/:id', userController.update.bind(userController));
usersRouter.delete('/:id', userController.delete.bind(userController));

export { usersRouter }; 