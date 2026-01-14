import { Controller, Post, Body, Request, HttpStatus, HttpCode, UseGuards, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { SkipAuth } from './constants';
import { LocalAuthGuard } from './local-auth.guard';
import type { Response } from 'express';
import { CookieHelper } from './helper/cookie.helper';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Creates a new User' })
  @ApiResponse({ status: 201, description: 'User object created' })
  @SkipAuth()
  @Post('register')
  async register(@Body() registerDto: RegisterDto, @Res({ passthrough: true }) res: Response) {
    const newUser = await this.authService.register(registerDto);
    
    const { accessToken, refreshToken } = await this.authService.getTokens(
      newUser.id.toString(),
      newUser.email,
    );

    CookieHelper.setAuthCookies(res, accessToken, refreshToken);
    return newUser
  }
  
  @ApiOperation({ summary: 'Log in for user (create the access_token cookies)' })
  @ApiResponse({ status: 200, description: 'Success message' })
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

  @ApiOperation({ summary: 'Log in for user (delete the access_token cookies)' })
  @ApiResponse({ status: 200, description: 'Success message' })
  @SkipAuth()
  @HttpCode(HttpStatus.OK)
  @Post('logout')
  async logout(
    @Request() req,
    @Res({ passthrough: true }) res: Response,
  ) {
    //TODO: implement logic to remove refreshtoken in DB

    CookieHelper.clearAuthCookies(res);
    console.log("session deleted ", res.getHeaders())
    console.log('req.secure:', req.secure);
    console.log('x-forwarded-proto:', req.headers['x-forwarded-proto']);
    return { message: 'Logout success' };
  }
}
