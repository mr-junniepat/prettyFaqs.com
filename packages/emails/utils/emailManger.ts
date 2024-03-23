import BaseEmailHandler from "./_baseHandler"



const sendEmail = (prepare: () => BaseEmailHandler) => {
    return new Promise((resolve, reject) => {
      try {
        const email = prepare();
        resolve(email.sendEmail());
      } catch (error) {
        console.error(`${prepare.constructor.name}.sendEmail failed`, error);
        reject(error);
      }
    });
  };
  
  export default async (
    verificationInput: any,
    handlerConstructor: new (verificationInput: any) => BaseEmailHandler
  ) => {
    await sendEmail(() => new handlerConstructor(verificationInput));
  };