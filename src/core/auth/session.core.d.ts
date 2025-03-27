import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  /**
   * Extensão da interface User para incluir campos personalizados.
   */
  interface User extends DefaultUser {
    clientId: string;
    userUniversalId: string;
  }

  /**
   * Extensão da interface Session para incluir campos personalizados.
   */
  interface Session {
    clientId: string;
    userUniversalId: string;
    user?: DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  /**
   * Extensão da interface JWT para incluir campos personalizados.
   */
  interface JWT {
    clientId: string;
    userUniversalId: string
  }
}

export interface DataSession {
  clientId: number
  userUniversalId: string
}