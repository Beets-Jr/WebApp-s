export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateUserDTO {
  name: string;
  email: string;
  password: string;
  role?: 'admin' | 'user';
}

export interface UpdateUserDTO {
  name?: string;
  email?: string;
  role?: 'admin' | 'user';
} 