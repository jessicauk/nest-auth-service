/*
  Warnings:

  - You are about to drop the column `updtatedAt` on the `User` table. All the data in the column will be lost.
  - Added the required column `upddatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "updtatedAt",
ADD COLUMN     "upddatedAt" TIMESTAMP(3) NOT NULL;
