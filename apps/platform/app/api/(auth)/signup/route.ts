import { NextResponse} from 'next/server'

import dayjs from "@repo/dayjs";
import { hashPassword } from "@repo/libs";
import { slugify } from "@repo/libs";
import { generateOTPAndSendEmail  } from "@repo/emails/generateOTPAndSendEmail";
import {Prisma, PrismaClient} from "@repo/prisma/client";


export async function POST(request: Request) {
  const prisma = new PrismaClient()
  const res = await request.json()
  
  
  
  const { email, password, name } = res

  const username = `@${slugify(name)}`;
  const userEmail =  email.toLowerCase();

  const hashedPassword = await hashPassword(password);
    await prisma.user.upsert({
      where: { email: userEmail },
      update: {
        username,
        name,
        password: hashedPassword,
      },
      create: {
        username,
        email: userEmail,
        password: hashedPassword,
       
      },
    });
    await generateOTPAndSendEmail({
      email: userEmail,
      name,
  
    });
  

    return  NextResponse.json({ message: "Created user" });
}
