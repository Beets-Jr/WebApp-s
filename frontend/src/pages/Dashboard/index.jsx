import React from 'react';
import { 
  Container, 
  Paper, 
  Typography, 
  Box, 
  Button,
  Fade,
  Grow
} from '@mui/material';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

export default function Dashboard() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut();
    navigate('/login');
  };

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 4,
        }}
      >
        <Fade in timeout={1000}>
          <Typography variant="h3" component="h1" align="center" gutterBottom>
            🎉 Login realizado com sucesso!
          </Typography>
        </Fade>

        <Grow in timeout={1500}>
          <Paper
            elevation={3}
            sx={{
              p: 4,
              textAlign: 'center',
              maxWidth: 600,
              width: '100%',
              bgcolor: 'primary.light',
              color: 'white',
            }}
          >
            <RocketLaunchIcon sx={{ fontSize: 60, mb: 2 }} />
            <Typography variant="h5" gutterBottom>
              Bem-vindo(a), {user?.name}!
            </Typography>
            <Typography variant="body1" paragraph>
              Este é o repositório base da Beets Jr. Aqui você encontrará uma estrutura pronta
              para começar seus projetos com as melhores práticas de desenvolvimento.
            </Typography>
            <Typography variant="body1" sx={{ fontStyle: 'italic', mt: 2 }}>
              "Aproveite esta base sólida para construir coisas incríveis! 🚀"
            </Typography>
          </Paper>
        </Grow>

        <Fade in timeout={2000}>
          <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleLogout}
            >
              Sair
            </Button>
          </Box>
        </Fade>
      </Box>
    </Container>
  );
} 