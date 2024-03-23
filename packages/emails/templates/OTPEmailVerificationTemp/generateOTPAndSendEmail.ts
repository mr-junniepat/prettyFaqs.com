
import { createHash } from "crypto";
import { totp } from "otplib";
import {PrismaClient} from "@repo/prisma/client";
import VerifyEmailHandler from "./verifyEmailHandler";
import  sendEmailVerificationCode  from "../../utils/emailManger";


interface VerifyEmailType {
    name?: string;
    email: string;
    language?: string;
  }

export const generateOTPAndSendEmail = async ({ email,  name }: VerifyEmailType) => {
  const prisma = new PrismaClient()
    const secret = createHash("md5")
      .update(email + process.env.PRETTYFAQ_ENCRYPTION_KEY )
      .digest("hex");
  
    totp.options = { step: 900 };
    const code = totp.generate(secret);

    
    await prisma.otp.upsert({
      where: {
        email,
      },
      update: {
        otp:code
      },
      create: {
        email,
       otp:code
      },
    })
    
    try {
      await sendEmailVerificationCode({
        verificationEmailCode: code,
        user: {
          email,
          name,
        },
      }, VerifyEmailHandler);
    } catch (error) {
      console.log(error)
    }
  

  
    return { ok: true };
  };