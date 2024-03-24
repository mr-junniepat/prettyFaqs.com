"use server"

import { signOut } from "@platform/auth"

export async function logout(){
  return signOut({redirectTo:"/auth/signin"})
}