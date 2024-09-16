import NextAuth from "next-auth";
import { DefaultUser } from "next-auth";

declare module "next-auth" {
  interface User {
    accessToken?: string;
    role?: string;
  }
  interface Session {
    user: User;
  }
}
