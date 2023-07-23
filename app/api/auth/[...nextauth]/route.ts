import NextAuth, {
  Awaitable,
  DefaultSession,
  NextAuthOptions,
  Session,
} from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
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
          email: credentials?.email,
          password: credentials?.password,
        };
        const res = await fetch("http://localhost:5001/api/auth/login", {
          method: "POST",
          body: JSON.stringify(body),
          headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        console.log("data: ", data);

        // If no error and we have data data, return it
        if (data?.user) {
          return {
            ...data.user,
            token: data.token,
          };
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    // handle set Token is user info
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    signIn(): Awaitable<string | boolean> {
      return true;
    },
    // handle return user info in session
    session(props): Awaitable<Session | DefaultSession> {
      const { session, token: tokens } = props;
      const { token, ...user } = tokens as any;
      session.user = user;
      session.token = token;
      return { ...session };
    },
  },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
