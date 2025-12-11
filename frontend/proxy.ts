import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export  async function proxy(req: NextRequest) {
  console.log("Todas las cookies:", req.cookies); 
  let token: string | null = null;

  if (process.env.NODE_ENV === 'production') {
    // Leer token del header Authorization enviado desde frontend
    const authHeader = req.headers.get('authorization');
    console.log("AUTH HEADER: ", authHeader)
    token = authHeader?.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;
  } else {
    // Local: leer token desde cookie
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
