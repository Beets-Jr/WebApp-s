import { Request, Response, NextFunction } from 'express';
import { auth } from '../config/firebase';

export async function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const token = req.headers.authorization?.split('Bearer ')[1];

    if (!token) {
      return res.status(401).json({ error: 'Token não fornecido' });
    }

    try {
      const decodedToken = await auth.verifyIdToken(token);
      req.user = {
        id: decodedToken.uid,
        email: decodedToken.email,
        role: decodedToken.role || 'user',
      };
      return next();
    } catch (error) {
      return res.status(401).json({ error: 'Token inválido' });
    }
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
} 