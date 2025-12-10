import { Response } from 'express';

export class CookieHelper {
static setAuthCookies(res: Response, accessToken: string, refreshToken: string) {
  res.cookie('access_token', accessToken, {
    httpOnly: true,
    secure: false,
    sameSite: 'lax',
    //domain: 'localhost',   // clave: coincidir con frontend
    path: '/',             // clave: accesible en todas las rutas
    maxAge: 1000 * 60 * 15,
  });

  res.cookie('refresh_token', refreshToken, {
    httpOnly: true,
    secure: false,
    sameSite: 'lax',
    // domain: 'localhost',
    path: '/',
    maxAge: 1000 * 60 * 60 * 24 * 7,
  });

  console.log("COOKIES CREATED", accessToken);
  console.log("REFRESH TOKEN: ", refreshToken);
  // console.log("cookies ", res.cookie.)
}

  static clearAuthCookies(res: Response) {
    res.clearCookie('access_token');
    res.clearCookie('refresh_token');
  }
}
