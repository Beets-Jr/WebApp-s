import { Router } from 'express';
import { usersRouter } from './users';
import { auth } from '../config/firebase';

const router = Router();

router.use('/users', usersRouter);

// Rota de registro
router.post('/register', async (req, res) => {
  try {
    const { email, password, name } = req.body;
    
    const userRecord = await auth.createUser({
      email,
      password,
      displayName: name
    });

    const token = await auth.createCustomToken(userRecord.uid);

    return res.status(201).json({
      user: {
        id: userRecord.uid,
        name: userRecord.displayName,
        email: userRecord.email
      },
      token
    });
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
});

// Rota de login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Aqui você normalmente usaria o método de login do Firebase
    // Por enquanto, vamos apenas verificar se o usuário existe
    const user = await auth.getUserByEmail(email);
    
    const token = await auth.createCustomToken(user.uid);

    return res.json({
      user: {
        id: user.uid,
        name: user.displayName,
        email: user.email
      },
      token
    });
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
});

export { router }; 