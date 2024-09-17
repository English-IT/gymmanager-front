import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { message } from "antd";
import { baseURL } from "..";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        phone: { label: "Phone", type: "text", placeholder: "1234567890" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const res = await fetch(`${baseURL}/auth/sign-in`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              phone: credentials?.phone,
              password: credentials?.password,
            }),
          });

          const data = await res.json();

          if (res.ok && data.user && data.accessToken) {
            return {
              ...data.user,
              accessToken: data.accessToken,
            };
          } else {
            message.error("Invalid response or failed authentication");
            return null;
          }
        } catch (error) {
          message.error("Authorization error");
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.role = user.role;
      }

      return token;
    },
    async session({ session, token }) {
      session.user.accessToken = token.accessToken as string;
      session.user.role = token.role as string;

      return session;
    },
  },
});
