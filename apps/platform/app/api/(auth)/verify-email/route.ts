import dayjs from '@repo/dayjs';
import { NextResponse} from 'next/server'
import { redirect } from 'next/navigation'
import { prisma } from "@repo/prisma/client";
import { type NextRequest } from 'next/server'
import { VerifyTokenSchema } from "@repo/zod/schema/verifyToken"



const WEBAPP_URL = process.env.NEXTAUTH_URL



export async function GET(request:NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const queryToken = searchParams.get('token')
  const {token} = VerifyTokenSchema.parse({token:queryToken});

  
  const foundToken = await prisma.verificationToken.findFirst({
    where: {
      token,
    },
  });
 
  
  if (!foundToken) {
    return NextResponse.json( "No token found" );
  }

  if (dayjs(foundToken?.expires).isBefore(dayjs())) {
    return NextResponse.json("Token expired");
  }
 

    await prisma.user.update({
    where: {
      email: foundToken?.email,
    },
    data: {
      emailVerified: true,
    },
  });

//   Delete token from DB after it has been used
  await prisma.verificationToken.delete({
    where: {
      id: foundToken?.id,
    },
  });

  redirect(`/auth/signin`)

  
}
