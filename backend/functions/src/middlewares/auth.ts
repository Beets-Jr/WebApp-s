import { Request, Response, NextFunction } from 'express';
import { DecodedIdToken } from 'firebase-admin/auth';
import { auth } from 'src/config/firebase';

/**
 * Para que o TypeScript reconheça a propriedade 'user' no objeto 'Request' do Express,
 * é necessário estender sua tipagem.
 */
declare global {
  namespace Express {
    interface Request {
      user?: DecodedIdToken;
    }
  }
}

/**
 * Middleware de autenticação que verifica o ID Token do Firebase.
 * Se o token for válido, os dados decodificados do usuário são anexados a `req.user`.
 */
export async function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void | Response> {
  // 1. Extrai o cabeçalho de autorização
  const authHeader = req.headers.authorization;

  // 2. Verifica se o token Bearer foi fornecido
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res
      .status(401)
      .json({ error: 'Token não fornecido ou mal formatado.' });
  }

  const token = authHeader.split('Bearer ')[1];

  try {
    // 3. Verifica o token usando o Firebase Admin SDK
    const decodedToken = await auth.verifyIdToken(token);

    // 4. Anexa os dados do usuário à requisição para uso posterior nas rotas
    req.user = decodedToken;

    // 5. Continua para a próxima função no ciclo da requisição
    return next();
  } catch (error: any) {
    console.error('Falha na autenticação do token Firebase:', error.message);

    // Retorna um erro claro se o token for inválido, expirado ou houver outro problema
    return res
      .status(403)
      .json({ error: 'Acesso negado. Token inválido ou expirado.' });
  }
}
