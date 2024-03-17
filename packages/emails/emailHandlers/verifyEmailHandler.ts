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
      html: `<h1>hello ${this.verifyAccountInput.verificationEmailCode}<h1>`,
      text: "hello world from col",
    };
  }

}