import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  // Create a user
  async createUser(
    name: string,
    email: string,
    password: string,
  ): Promise<User> {
    const user = this.userRepository.create({ name, email, password });
    return this.userRepository.save(user);
  }

  // Get all users
  async getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  // Get a user by ID
  async getUserById(id: number): Promise<User> {
    return this.userRepository.findOne({ where: { id } });
  }

  // Update a user
  async updateUser(
    id: number,
    name: string,
    email: string,
    password: string,
  ): Promise<User> {
    const user = await this.getUserById(id);
    user.name = name;
    user.email = email;
    user.password = password;
    return this.userRepository.save(user);
  }

  // Delete a user
  async deleteUser(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
