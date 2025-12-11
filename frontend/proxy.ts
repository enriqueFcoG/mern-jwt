import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export  async function proxy(req: NextRequest) {
  console.log("Todas las cookies:", req.cookies); 
  let token: string | null = null;

  if (process.env.NODE_ENV === 'production') {
    // since this middleware is not able to read cookies in prod, we are going to read it from headers
    console.log("headers ", req.headers)
    const scHeaders = req.headers.get('x-vercel-sc-headers');
    if (scHeaders) {
      try {
        const parsed = JSON.parse(scHeaders);
        const authHeader = parsed['Authorization'] || parsed['authorization'];
        token = authHeader?.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;
      } catch (err) {
        console.error('Error parsing x-vercel-sc-headers', err);
      }
    }
  } else {
    // dev mode will work with cookies
    token = req.cookies.get('access_token')?.value || null;
  }
  console.log("TOKEN ", token)
  const publicRoutes = ["/login", "/register"];
  const isPublic = publicRoutes.includes(req.nextUrl.pathname);
  // redirect to login if we don't have token and if its a private url (home, profile)
  if (!token && !isPublic) {
    return NextResponse.redirect(new URL("/login", req.url));
  } 

  // if we have token and its a public rout (login, register) need to redirect to home page
  if (token && isPublic) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/login",
    "/register",
    "/profile",
    "/dashboard",
    "/",
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
