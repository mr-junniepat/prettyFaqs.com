/*
  Warnings:

  - You are about to drop the `OTP` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "OTP";

-- CreateTable
CREATE TABLE "Otp" (
    "id" TEXT NOT NULL,
    "otp" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Otp_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Otp_otp_key" ON "Otp"("otp");

-- CreateIndex
CREATE UNIQUE INDEX "Otp_email_key" ON "Otp"("email");
