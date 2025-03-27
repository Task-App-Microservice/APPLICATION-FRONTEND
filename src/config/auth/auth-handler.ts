import { NextAuthOptions } from "next-auth"; 
import CredentialsProvider from "next-auth/providers/credentials";

const TOKEN_EXPIRATION_TIME = 9 * 60 * 60; // 9 horas em segundos

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        userUniversalId: { label: "userUniversalId", type: "text" },
        clientId: { label: "clientId", type: "text" }
      },
      async authorize(credentials) {
        if (!credentials?.userUniversalId || !credentials?.clientId) {
          return null;
        }

        return {
            id: credentials.userUniversalId, 
            email: `${credentials.userUniversalId}@example.com`, 
            userUniversalId: credentials.userUniversalId,
            clientId: credentials.clientId,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: TOKEN_EXPIRATION_TIME, // Definir a expiração da sessão
  },
  pages: {
    signIn: '/sign-in',
    error: '/auth/error'
  },
  callbacks: {
    async jwt({ token, user }) {
        if (user) {
            token.userUniversalId = user.userUniversalId;
            token.clientId = user.clientId;
          }
          console.log("Token gerado no JWT Callback:", token);
          return token;
    },
    async session({ session, token }) {
        if (session.user) {
            session.userUniversalId = token.userUniversalId as string;
            session.clientId = token.clientId as string;
          }
          return session;
    }
  }
};