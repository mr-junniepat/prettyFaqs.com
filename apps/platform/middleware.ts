import NextAuth from "next-auth";
import { auth } from "./auth";
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
 
} from "@platform/routes";



export default auth((req): any  => {
    
    const isLoggedIn = !!req.auth;
    const { nextUrl } = req;
  
  
    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);
 
    if (isApiAuthRoute) {
      return null
    }
  
    if (isAuthRoute) {
      if (isLoggedIn) {
        return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
      }
      return null;
    }
  
    if (!isLoggedIn) {
       
      let callbackUrl = nextUrl.pathname;
      if (nextUrl.search) {
        callbackUrl += nextUrl.search;
      }
  
      const encodedCallbackUrl = encodeURIComponent(callbackUrl);
  
      return Response.redirect(new URL(
        `/auth/signin?callbackUrl=${encodedCallbackUrl}`,
        nextUrl
      ));
    }
  
    return null;
  
})

export const config = {
    matcher: [ '/((?!api|_next/static|_next/image|favicon.ico).*)'],
  }