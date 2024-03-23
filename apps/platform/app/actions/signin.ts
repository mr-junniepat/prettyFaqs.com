"use server"
import { revalidatePath } from "next/cache";

import {prisma} from "@repo/prisma/client";
import {  generateOTPAndSendEmail  } from "@repo/emails/templates/OTPEmailVerificationTemp/generateOTPAndSendEmail";
import {signupSchema} from "@repo/zod/schema/signup"
import { redirect } from "next/navigation";
import {verifyPassword} from "@repo/libs/verify-password"
import {signIn} from '@platform/auth'
export async function login(prevState: {message: string, success: boolean, twoFAEnabled?: boolean},formData: FormData) {
  const queryEmail = formData.get("email")
  const queryPassword = formData.get("password")
  const twoFA = formData.get('twoFA')?.toString()
  const {email, password} = signupSchema.parse({email:queryEmail, password: queryPassword})



  const userEmail =  email?.toString().toLowerCase()!

  const user = await prisma.user.findUnique({
    where: {
      email: userEmail,
    },
    include: {
      Org: {
       select: {
        id:true,
        enableTwoFactorAuth:true
       }
      },
    },
  });



  if(!user) {
    return  { message: "Incorrect email or password", success: false }
  }

  const isPasswordCorrect = await verifyPassword(password,user.password!)
  
  if(!isPasswordCorrect) {
    return  { message: "Incorrect email or password", success: false }
  }

  if(!user.emailVerified) {
    return  { message: "Email verification is still pending", success: false }
  }
  if(user.enableTwoFactorAuth && user.Org?.enableTwoFactorAuth && !twoFA){
    await generateOTPAndSendEmail({email: userEmail}).catch((error) => console.error(error))
    return  { message: "Enter your 2FA code", success: false,  twoFAEnabled: true }
  }

  if(user.enableTwoFactorAuth && user.Org?.enableTwoFactorAuth && twoFA){
    const foundToken = await prisma.verificationToken.findFirst({
      where: {
        token: twoFA,
      },
    })

    if(!foundToken) {
      return  { message: "Invalid 2FA code", success: false,  twoFAEnabled: true }
    }
    
  }
//you don't want to expose password to the client
  user.password = null
  try {
    
    await   signIn('credentials', {
      redirect: false,
      user: JSON.stringify(user),
    })
  } catch (error:any) {
   
    return  { message:error?.message, success: false }
  }


  
 
    return  redirect("/")


  }