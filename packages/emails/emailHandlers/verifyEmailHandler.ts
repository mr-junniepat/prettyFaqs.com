import { OTPEmailVerificationTemp } from "../templates/OTPEmailVerificationTemp";
import { compileTemplate } from "../templates/compileTemplate";
import BaseHandler  from "./_baseHandler";


export type EmailVerifyCode = {
  
  user: {
    name?: string | null;
    email: string;
  };
  verificationEmailCode: string;
};

export default class VerifyEmailHandler extends BaseHandler  {
  verifyAccountInput: EmailVerifyCode;

  constructor(passwordEvent: EmailVerifyCode) {
    super();
    this.verifyAccountInput = passwordEvent;
  }

  protected getNodeMailerPayload(): Record<string, unknown> {
    return {
      to: `${this.verifyAccountInput.user.name} <${this.verifyAccountInput.user.email}>`,
      from: `<${this.getMailerOptions().from}>`,
      subject: "email verification",
      html: compileTemplate(OTPEmailVerificationTemp, {otp: this.verifyAccountInput.verificationEmailCode}),
      text: "hello world from col",
    };
  }

}