/*
  Warnings:

  - A unique constraint covering the columns `[kidId]` on the table `Image` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Image_kidId_key` ON `Image`(`kidId`);
