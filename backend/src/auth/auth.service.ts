import { ConflictException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async getTokens(userId: string, email: string) {
    const payload = { sub: userId, email };

    const accessToken = this.jwtService.sign(payload, {
      expiresIn: '15m',
    });

    const refreshToken = this.jwtService.sign(payload, {
      expiresIn: '7d',
    });

    return { accessToken, refreshToken };
  }

  async hashToken(token: string) {
    return bcrypt.hash(token, 10);
  }

  async register(registerDto: RegisterDto) {
    const hashPassword = await bcrypt.hash(registerDto.password, 10);
    registerDto.password = hashPassword;
    const user = await this.usersService.findByEmail(registerDto.email);
    if (user) {
      throw new ConflictException("User already exists")
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

  async login(userId: string, email: string) {
    const { accessToken, refreshToken } = await this.getTokens(userId, email);

    // TODO: save refresh token

    return { accessToken, refreshToken };
  }

  async logout(userId: number) {
    //TODO: remove refresh token
    return true;
  }
}
