import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  // Definir rotas públicas
  const publicRoutes = [
    "/auth/sign-in",
    "/auth/sign-up",
    "/auth/verification/account"
  ];

  // Rotas protegidas que requerem autenticação
  const protectedRoutes = [
    "/",
    "/project",
    "/project/:path*"
  ];

  // Se usuário autenticado tentar acessar rotas públicas
  if (token && publicRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Se usuário não autenticado tentar acessar rotas protegidas
  if (!token && protectedRoutes.some(route => 
    pathname === route || 
    (route.includes(":path*") && pathname.startsWith(route.split(":")[0]))
  )) {
    return NextResponse.redirect(new URL("/auth/sign-in", req.url));
  }

  // Permitir acesso normal para outros casos
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/project/:path*",
    "/auth/:path*",
  ],
};