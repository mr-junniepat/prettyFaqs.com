import VerifyEmailHandler from "./emailHandlers/verifyEmailHandler";
import BaseEmailHandler from "./emailHandlers/_baseHandler"

export type EmailVerifyCode = {
  user: {
    name?: string | null;
    email: string;
  };
  verificationEmailCode: string;
};

const sendEmail = (prepare: () => BaseEmailHandler) => {
  return new Promise((resolve, reject) => {
    try {
      const email = prepare();
      resolve(email.sendEmail());
    } catch (e) {
      reject(console.error(`${prepare.constructor.name}.sendEmail failed`, e));
    }
  });
};

export const sendEmailVerificationCode = async (
  verificationInput: EmailVerifyCode
) => {
  await sendEmail(() => new VerifyEmailHandler(verificationInput));
};
