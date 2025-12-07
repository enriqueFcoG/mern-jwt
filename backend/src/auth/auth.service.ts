import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async register(registerDto: RegisterDto) {
    const user = await this.usersService.findByEmail(registerDto.email);
    if (user) {
      return 'User already exists';
    }
    return 'This action adds a new auth';
  }

  login(loginDto: LoginDto) {
    const user = this.usersService.findByEmail(loginDto.email);
    if (!user) {
      return 'User not found';
    }
    return 'This action logs in a user';
  }
}
