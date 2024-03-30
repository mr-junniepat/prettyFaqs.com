"use server"
import {prisma} from "@repo/prisma/client";
import {createOrgSchema} from "@repo/zod/schema/createOrg"
import {auth,  signIn} from '@platform/auth'
import { redirect } from "next/navigation";

export async function createOrgAction(prevState: {message: string, success: boolean},formData: FormData) {

   
const currentUser:any = await auth()   

const user = await prisma.user.findUnique({
    where: {
        email: currentUser?.email,
    },
    include: {
      Org: {
       select: {
        id:true,
        enableTwoFactorAuth:true,
        onboardingCompleted: true
       }
      },
    },
  });


if(user?.orgId){
    return {message:"You have an active organization", success:false}
}
const queryName = formData.get("name")
const {name} = createOrgSchema.parse({name:queryName})


const org = await prisma.org.create({data:{
    name
}})

 await prisma.user.update({
    where: {
      email: currentUser?.email,
    },
    data: {
        orgId: org.id,
      },
  });



  if(user){
    //you don't want to expose password to the client
user.password = null
    
await signIn('credentials', {
    redirect: false,
    user: JSON.stringify(user),
  })
  }

return  redirect('/')
  

}