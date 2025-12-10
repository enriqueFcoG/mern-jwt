import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async register(registerDto: RegisterDto) {
    const hashPassword = await bcrypt.hash(registerDto.password, 10);
    registerDto.password = hashPassword;
    const user = await this.usersService.findByEmail(registerDto.email);
    if (user) {
      return 'User already exists';
    }
    const newUser = await this.usersService.create(registerDto);
    return newUser;
  }

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (user && await bcrypt.compare(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.email, sub: user.id };
    const refresh_token = this.jwtService.sign(payload, { expiresIn: '7d' });
    return {
      access_token: this.jwtService.sign(payload),
      refresh_token
    };
  }
}
