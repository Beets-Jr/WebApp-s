import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { router } from './routes';
import { errorMiddleware } from './middlewares/error';

const app = express();

app.use(cors());
app.use(express.json());

// Rota de teste
app.get('/', (req, res) => {
  res.json({ message: 'Servidor funcionando!' });
});

app.use('/api', router);

app.use(errorMiddleware);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
}); 