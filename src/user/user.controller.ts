import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import * as bcrypt from 'bcrypt';

@Controller('users')
export class UserController {
  constructor(private readonly users: UserService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.users.findById(id);
  }

  @Post()
  async create(@Body() dto: CreateUserDto) {
    const passwordHash = await bcrypt.hash(dto.password, 10);
    return this.users.createUser({
      email: dto.email,
      passwordHash,
    });
  }
}
