import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  /**
   * Extensão da interface User para incluir campos personalizados.
   */
  interface User extends DefaultUser {
    userUniversalId: string;
    clientId: string;
  }

  /**
   * Extensão da interface Session para incluir campos personalizados.
   */
  interface Session {
    userUniversalId: string;
    clientId: string;
    user?: DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  /**
   * Extensão da interface JWT para incluir campos personalizados.
   */
  interface JWT {
    userUniversalId: string;
    clientId: string;
  }
}