import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service.js';

@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  @Post('register')
  register(@Body() body: any) {
    return { ok: true, action: 'register', body };
  }

  @Post('login')
  login(@Body() body: any) {
    return { ok: true, action: 'login', body };
  }
}
