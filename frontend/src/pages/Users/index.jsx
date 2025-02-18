import React, { useState, useEffect } from 'react';
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  IconButton,
  Typography,
} from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import UserForm from '../../components/Users/UserForm';
import api from '../../services/api';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await api.get('/users');
      setUsers(response.data);
      setError(null);
    } catch (err) {
      setError(err.response?.data?.error || 'Erro ao carregar usuários');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleOpenModal = (user = null) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
  };

  const handleSubmit = async (data) => {
    try {
      if (selectedUser) {
        await api.put(`/users/${selectedUser.id}`, data);
      } else {
        await api.post('/users', data);
      }
      fetchUsers();
      handleCloseModal();
    } catch (err) {
      alert(err.response?.data?.error || 'Erro ao salvar usuário');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja excluir este usuário?')) {
      try {
        await api.delete(`/users/${id}`);
        fetchUsers();
      } catch (err) {
        alert(err.response?.data?.error || 'Erro ao excluir usuário');
      }
    }
  };

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
        <Typography variant="h4">Usuários</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleOpenModal()}
        >
          Novo Usuário
        </Button>
      </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Papel</TableCell>
              <TableCell align="right">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role === 'admin' ? 'Administrador' : 'Usuário'}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => handleOpenModal(user)} color="primary">
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(user.id)} color="error">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <UserForm
        open={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        initialData={selectedUser}
      />
    </Container>
  );
} 