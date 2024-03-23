-- AlterTable
ALTER TABLE "Org" ALTER COLUMN "enableTwoFactorAuth" SET DEFAULT false;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "enableTwoFactorAuth" BOOLEAN DEFAULT false;
