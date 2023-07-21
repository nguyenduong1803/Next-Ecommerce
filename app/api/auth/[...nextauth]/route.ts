import NextAuth, { Awaitable, NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

const customLogin = async () => {
  try {
    const res = await fetch("http://localhost:3001");
  } catch (error) {}
};

const authOption: NextAuthOptions = {
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID || "",
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    // }),
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID || "",
    //   clientSecret: process.env.GITHUB_SECRET || "",
    // }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        const body = {
          email: "test1@gmail.com",
          password: "123456",
        };
        const res = await fetch("http://localhost:5001/api/auth/login", {
          method: "POST",
          body: JSON.stringify(body),
          headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        console.log(data);
        // If no error and we have data data, return it
        if (data) {
          return data.user;
        }
        // Return null if user data could not be retrieved
        return {
          name: "duong",
          image: "ádfadsf",
          email: "emmail",
        };
      },
    }),
  ],

  callbacks: {
    signIn({ user }): Awaitable<string | boolean> {
      console.log("user: ", user);
      return true;
    },
    async jwt({ token }) {
      console.log("token: ", token);
      token.userRole = "admin";
      return token;
    },
  },
};
const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
