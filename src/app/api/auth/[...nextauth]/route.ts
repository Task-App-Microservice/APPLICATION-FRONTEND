import { authOptions } from "@/config/auth/auth-handler";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };