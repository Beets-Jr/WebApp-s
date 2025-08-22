import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async create(req: Request, res: Response) {
    try {
      const user = await this.userService.create(req.body);
      return res.status(201).json(user);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const users = await this.userService.findAll();
      return res.json(users);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const user = await this.userService.findById(req.params.id);
      return res.json(user);
    } catch (error: any) {
      return res.status(404).json({ error: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const user = await this.userService.update(req.params.id, req.body);
      return res.json(user);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      await this.userService.delete(req.params.id);
      return res.status(204).send();
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
} 