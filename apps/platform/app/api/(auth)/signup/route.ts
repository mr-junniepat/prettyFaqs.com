import { NextResponse} from 'next/server'
import { hashPassword } from "@repo/libs";
import { generateTokenAndSendEmail  } from "@repo/emails/templates/tokenEmailVerificationTemp/generateTokenAndSendEmail";
import {prisma} from "@repo/prisma/client";


export async function POST(request: Request) {
  const res = await request.json()
  const { email, password } = res
  const userEmail =  email.toLowerCase();
  const hashedPassword = await hashPassword(password);

  const isUserExisting = await prisma.user.findUnique({
    where: {
      email,
    },
  })


if(isUserExisting){
    return  NextResponse.json({ message: "Email is already taken" }, {status:400});
}

   await prisma.user.create({
          data: {
              email: userEmail,
              password: hashedPassword,
             
            }
      })
     
      await generateTokenAndSendEmail({
        email: userEmail,
      }).catch((error) => console.error(error))
    
  
      return  NextResponse.json({ message: "Created user" });

   
 
}
