import { randomBytes, createHash } from "crypto";
import {prisma} from "@repo/prisma/client";
import VerifyEmailHandler from "./verifyEmailHandler";
import  sendEmailVerificationCode  from "../../utils/emailManger";


interface VerifyEmailType {
  name?: string;
  email: string;

}

const WEBAPP_URL = process.env.NEXTAUTH_WEBURL
export const generateTokenAndSendEmail = async ({ email }: VerifyEmailType) => {
    const token = randomBytes(32).toString("hex");
 
  
    await prisma.verificationToken.create({
      data: {
       email,
        token,
        expires: new Date(Date.now() + 24 * 3600 * 1000), // +1 day
      },
    });
  
    const params = new URLSearchParams({
      token,
    });
  
    await sendEmailVerificationCode({
      verificationEmailLink: `${WEBAPP_URL}/api/verify-email?${params.toString()}`,
      user: {
        email,
        
      },
    }, VerifyEmailHandler);
  
    return { ok: true };
  };