import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service.js';

@Injectable()
export class AuthService {
  constructor(private readonly users: UserService) {}
}
