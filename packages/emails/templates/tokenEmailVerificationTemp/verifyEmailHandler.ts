import { tokenEmailVerificationTemp } from "./template";
import { compileTemplate } from "../../utils/compileTemplate";
import BaseHandler  from "../../utils/_baseHandler";


export type EmailVerifyCode = {
  
  user: {
    name?: string | null;
    email: string;
  };
  verificationEmailLink: string;
  
};

export default class VerifyEmailHandler extends BaseHandler  {
  verifyAccountInput: EmailVerifyCode;

  constructor(passwordEvent: EmailVerifyCode) {
    super();
    this.verifyAccountInput = passwordEvent;
  }

  protected getNodeMailerPayload(): Record<string, unknown> {
    return {
      to: `<${this.verifyAccountInput.user.email}>`,
      from: `<${this.getMailerOptions().from}>`,
      subject: "Email verification",
      html: compileTemplate(tokenEmailVerificationTemp, {token: this.verifyAccountInput.verificationEmailLink}),
      text: "Hello Verify your email",
    };
  }

}