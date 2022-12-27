/*
  Warnings:

  - The `cpf` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Made the column `user_id` on table `addresses` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "addresses" DROP CONSTRAINT "addresses_user_id_fkey";

-- AlterTable
ALTER TABLE "addresses" ALTER COLUMN "user_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "cpf",
ADD COLUMN     "cpf" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "users_cpf_key" ON "users"("cpf");

-- AddForeignKey
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
