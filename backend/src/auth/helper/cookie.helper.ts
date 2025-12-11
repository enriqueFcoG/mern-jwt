import { Response } from 'express';

export class CookieHelper {
  static setAuthCookies(res: Response, accessToken: string, refreshToken: string) {
    res.cookie('access_token', accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      path: '/',
      maxAge: 1000 * 60 * 15,
    });

    res.cookie('refresh_token', refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      path: '/',
      maxAge: 1000 * 60 * 15,
    });

    console.log("COOKIES CREATED ", accessToken)
  }

  static clearAuthCookies(res: Response) {
    console.log("Deleting cookies... ",res.cookie)
    res.clearCookie('access_token');
    res.clearCookie('refresh_token');
  }
}
