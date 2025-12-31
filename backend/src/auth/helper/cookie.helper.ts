import { CookieOptions, Response } from 'express';

export class CookieHelper {
  static cookieOptions: CookieOptions = {
    httpOnly: true,
    secure: true,
    sameSite: 'none',
    path: '/',
  
  }
  static setAuthCookies(res: Response, accessToken: string, refreshToken: string) {
    res.cookie('access_token', accessToken, {
      ...this.cookieOptions,
      maxAge: 1000 * 60 * 15,
    });

    res.cookie('refresh_token', refreshToken, {
      ...this.cookieOptions,
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });

    console.log("COOKIES CREATED ", accessToken)
  }

  static clearAuthCookies(res: Response) {
    // console.log("accessToken cookie ", res.get )
    console.log("Deleting cookies... ", this.cookieOptions)
    res.clearCookie('access_token',this.cookieOptions);
    res.clearCookie('refresh_token', this.cookieOptions);
  }
}
