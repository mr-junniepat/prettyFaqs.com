import { decodeHTML } from "entities";
import { createTransport } from "nodemailer";
import { z } from "zod";
import dayjs from "@repo/dayjs";
import { getErrorFromUnknown } from "@repo/libs";
import { serverConfig } from "../serverConfig";



export default class BaseHandler {
 

  protected getNodeMailerPayload(): Record<string, unknown> {
    return {};
  }
  public async sendEmail() {


    const payload = this.getNodeMailerPayload();
    const parseSubject = z.string().safeParse(payload?.subject);
    console.log({message:"I was called"})
    const payloadWithUnEscapedSubject = {
      ...payload,
      ...(parseSubject.success && { subject: decodeHTML(parseSubject.data) }),
    };

    await new Promise((resolve, reject) =>
      createTransport(this.getMailerOptions().transport).sendMail(
        payloadWithUnEscapedSubject,
        (_err, info) => {
          if (_err) {
            const err = getErrorFromUnknown(_err);
            reject(err);
          } else {
            resolve(info);
          }
        }
      )
    ).catch((e) => console.error("sendEmail", e));
    return new Promise((resolve) => resolve("send mail async"));
  }

  protected getMailerOptions() {
    
    return {
      transport: serverConfig.transport,
      from: serverConfig.from,
    };
  }

 
}
