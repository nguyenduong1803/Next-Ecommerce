import NextAuth from "next-auth/next";
import { IUser } from "./user.type";

declare module "next-auth" {
  interface Session {
    message: string;
    token: string;
    user: IUser;
  }
}
