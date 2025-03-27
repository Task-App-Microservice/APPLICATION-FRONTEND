import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET }); 
  const { pathname } = req.nextUrl;

  const publicRoutes = ["/auth/sign-in", "/auth/sign-up", "/auth/verification/account"];

  if (token && publicRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (!token && !publicRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/auth/sign-in", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/app/:path*", "/auth:path*",], 
};