import { Controller, Post, Body, Request, HttpStatus, HttpCode, UseGuards, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { SkipAuth } from './constants';
import { LocalAuthGuard } from './local-auth.guard';
import type { Response } from 'express';
import { CookieHelper } from './helper/cookie.helper';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @SkipAuth()
  @Post('register')
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }
  
  @SkipAuth()
  @UseGuards(LocalAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Request() req, @Res({ passthrough: true }) res: Response) {
    //since we are using passport (LocalAuthGuard) we don't need to validate the user here
    const { accessToken, refreshToken } = await this.authService.login(
      req.user.id,
      req.user.email,
    );

  CookieHelper.setAuthCookies(res, accessToken, refreshToken);

    return { message: 'Login success' };
  }

  @Post('logout')
  async logout(
    @Request() req: any,
    @Res({ passthrough: true }) res: Response,
  ) {
    const user = req.user;

    await this.authService.logout(user.sub);

    CookieHelper.clearAuthCookies(res);

    return { message: 'Logout success' };
  }
}
