
import { createHash } from "crypto";
import { totp } from "otplib";

import { sendEmailVerificationCode } from "@repo/emails/emailManager";


interface VerifyEmailType {
    name?: string;
    email: string;
    language?: string;
  }

export const generateOTPAndSendEmail = async ({ email,  name }: VerifyEmailType) => {
   
    const secret = createHash("md5")
      .update(email + process.env.PRETTYFAQ_ENCRYPTION_KEY)
      .digest("hex");
  
    totp.options = { step: 900 };
    const code = totp.generate(secret);
  
    await sendEmailVerificationCode({
      verificationEmailCode: code,
      user: {
        email,
        name,
      },
    });
  
    return { ok: true, skipped: false };
  };