import NextAuth, { NextAuthConfig } from "next-auth"
import GitHub from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"

const providers = [ 
    CredentialsProvider({
        name: 'Credentials',
        credentials: {},
          async authorize(credentials:any, req) {
              const user = credentials?.user;
   
        if (user) {
          return JSON.parse(user);
        } else {
          return Promise.reject(new Error(user.message));
        }
          }

          
    })
]

export const AUTH_OPTIONS = {
    pages: {
        signIn: '/auth/signin',
      },
      
      session: {
        strategy: "jwt",
        maxAge: 1 * 60 * 60,
      },

      callbacks: {
        async session({ session, user, token }: any) {
          return (session.user = token.user);
        },
    
        async jwt({ token, user }: any) {
          if (user) {
            token.user = user
          }
          return token;
        },
      },

    providers: providers
 } satisfies NextAuthConfig


export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
  
} = NextAuth(AUTH_OPTIONS)