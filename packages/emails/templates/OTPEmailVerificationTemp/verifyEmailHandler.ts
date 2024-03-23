import { OTPEmailVerificationTemp } from "./template";
import { compileTemplate } from "../../utils/compileTemplate";
import BaseHandler  from "../../utils/_baseHandler";


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
      subject: "Email verification",
      html: compileTemplate(OTPEmailVerificationTemp, {otp: this.verifyAccountInput.verificationEmailCode}),
      text: "hello verify your email",
    };
  }

}