// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const org1 = await prisma.org.create({
 data: {
    name:"Lucy space"
 }
  });

  const org2 = await prisma.org.create({
    data: {
       name:"Mark store"
    }
     });
   

  console.log({ org1, org2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });