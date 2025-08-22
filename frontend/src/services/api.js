import axios from 'axios';
import { signOut } from 'firebase/auth';
import { auth } from './firebase'; 

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3001/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Interceptor de Requisição (Request)
 * Antes de cada requisição ser enviada, este código é executado.
 */
api.interceptors.request.use(
  async (config) => {
    const user = auth.currentUser; // Pega o usuário atualmente logado do Firebase

    // Se houver um usuário, pega seu ID Token mais recente
    if (user) {
      const token = await user.getIdToken(true); // O 'true' força a atualização do token se ele estiver expirado
      config.headers.authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * Interceptor de Resposta (Response)
 * Este código é executado sempre que uma resposta da API é recebida.
 */
api.interceptors.response.use(
  (response) => response, // Se a resposta for sucesso (2xx), apenas a retorna
  (error) => {
    // Se o backend retornar 401 (Não Autorizado) ou 403 (Proibido)
    if (error.response?.status === 401 || error.response?.status === 403) {
      // Desloga o usuário do Firebase no frontend.
      // O listener onAuthStateChanged no seu AuthContext cuidará de redirecionar o usuário.
      signOut(auth);
    }
    return Promise.reject(error);
  }
);

export default api;