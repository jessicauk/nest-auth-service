import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service.js';
import { UserService } from './user/user.service.js';
import { User as UserModel } from '../generated/prisma/client.js';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UserService,
  ) {}

  @Post('user')
  signupUser(@Body() userData: UserModel): Promise<UserModel> {
    return this.userService.createUser(userData);
  }

  @Get('users')
  async getAllUsers(): Promise<UserModel[]> {
    return await this.userService.users({});
  }
}
