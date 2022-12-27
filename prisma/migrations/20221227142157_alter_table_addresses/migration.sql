/*
  Warnings:

  - You are about to drop the column `city_id` on the `addresses` table. All the data in the column will be lost.
  - You are about to drop the column `district_id` on the `addresses` table. All the data in the column will be lost.
  - You are about to drop the column `state_id` on the `addresses` table. All the data in the column will be lost.
  - You are about to drop the column `street_id` on the `addresses` table. All the data in the column will be lost.
  - Added the required column `city` to the `addresses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `district` to the `addresses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `addresses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `street` to the `addresses` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "addresses" DROP CONSTRAINT "addresses_city_id_fkey";

-- DropForeignKey
ALTER TABLE "addresses" DROP CONSTRAINT "addresses_district_id_fkey";

-- DropForeignKey
ALTER TABLE "addresses" DROP CONSTRAINT "addresses_state_id_fkey";

-- DropForeignKey
ALTER TABLE "addresses" DROP CONSTRAINT "addresses_street_id_fkey";

-- AlterTable
ALTER TABLE "addresses" DROP COLUMN "city_id",
DROP COLUMN "district_id",
DROP COLUMN "state_id",
DROP COLUMN "street_id",
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "district" TEXT NOT NULL,
ADD COLUMN     "state" TEXT NOT NULL,
ADD COLUMN     "street" TEXT NOT NULL;
