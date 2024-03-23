-- CreateTable
CREATE TABLE "OTP" (
    "id" TEXT NOT NULL,
    "otp" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "OTP_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "OTP_otp_key" ON "OTP"("otp");

-- CreateIndex
CREATE UNIQUE INDEX "OTP_email_key" ON "OTP"("email");
