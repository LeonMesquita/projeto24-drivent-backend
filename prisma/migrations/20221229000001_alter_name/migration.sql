/*
  Warnings:

  - You are about to drop the `CreditCard` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CreditCard" DROP CONSTRAINT "CreditCard_user_id_fkey";

-- DropTable
DROP TABLE "CreditCard";

-- CreateTable
CREATE TABLE "credit_cards" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "expiration_date" TEXT NOT NULL,
    "cvc" TEXT NOT NULL,
    "total_credits" DOUBLE PRECISION DEFAULT 1000,
    "used_credits" DOUBLE PRECISION DEFAULT 0,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "credit_cards_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "credit_cards_number_key" ON "credit_cards"("number");

-- AddForeignKey
ALTER TABLE "credit_cards" ADD CONSTRAINT "credit_cards_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
