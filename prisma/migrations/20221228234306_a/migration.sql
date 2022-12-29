-- AlterTable
ALTER TABLE "CreditCard" ALTER COLUMN "total_credits" DROP NOT NULL,
ALTER COLUMN "total_credits" SET DEFAULT 1000;
