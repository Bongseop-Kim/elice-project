-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `emailVerified` DATETIME(3) NULL,
    `password` VARCHAR(191) NOT NULL,
    `phoneNumber` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `hospitalId` VARCHAR(191) NULL,
    `adminVerified` BOOLEAN NULL,
    `address` VARCHAR(191) NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    UNIQUE INDEX `User_hospitalId_key`(`hospitalId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Kid` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `parentId` INTEGER NOT NULL,
    `name` VARCHAR(191) NULL,
    `gender` VARCHAR(191) NULL,
    `birth` VARCHAR(191) NULL,
    `memo` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reservation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `hospitalId` VARCHAR(191) NOT NULL,
    `memo` VARCHAR(191) NULL,
    `read` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reviews` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `posterId` INTEGER NOT NULL,
    `hospitalId` VARCHAR(191) NOT NULL,
    `vote` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Favorite` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `hospitalId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Hospital` (
    `id` VARCHAR(191) NOT NULL,
    `dutyAddr` VARCHAR(191) NOT NULL,
    `dutyAddr1Depth` VARCHAR(191) NOT NULL,
    `dutyAddr2Depth` VARCHAR(191) NOT NULL,
    `dutyAddr3Depth` VARCHAR(191) NOT NULL,
    `dutyEtc` VARCHAR(191) NULL,
    `dutyInf` VARCHAR(191) NULL,
    `dutyMapimg` VARCHAR(191) NULL,
    `dutyName` VARCHAR(191) NOT NULL,
    `dutyTel1` VARCHAR(191) NOT NULL,
    `dutyTel3` VARCHAR(191) NULL,
    `startLunch` VARCHAR(191) NULL,
    `endLunch` VARCHAR(191) NULL,
    `dutyTime1c` VARCHAR(191) NULL,
    `dutyTime1s` VARCHAR(191) NULL,
    `dutyTime2c` VARCHAR(191) NULL,
    `dutyTime2s` VARCHAR(191) NULL,
    `dutyTime3c` VARCHAR(191) NULL,
    `dutyTime3s` VARCHAR(191) NULL,
    `dutyTime4c` VARCHAR(191) NULL,
    `dutyTime4s` VARCHAR(191) NULL,
    `dutyTime5c` VARCHAR(191) NULL,
    `dutyTime5s` VARCHAR(191) NULL,
    `dutyTime6c` VARCHAR(191) NULL,
    `dutyTime6s` VARCHAR(191) NULL,
    `dutyTime7c` VARCHAR(191) NULL,
    `dutyTime7s` VARCHAR(191) NULL,
    `dutyTime8c` VARCHAR(191) NULL,
    `dutyTime8s` VARCHAR(191) NULL,
    `wgs84Lat` DOUBLE NOT NULL,
    `wgs84Lon` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Image` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `imageUrl` VARCHAR(191) NOT NULL,
    `kidId` INTEGER NULL,
    `hospitalId` VARCHAR(191) NULL,

    UNIQUE INDEX `Image_kidId_key`(`kidId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_hospitalId_fkey` FOREIGN KEY (`hospitalId`) REFERENCES `Hospital`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Kid` ADD CONSTRAINT `Kid_parentId_fkey` FOREIGN KEY (`parentId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reservation` ADD CONSTRAINT `Reservation_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reservation` ADD CONSTRAINT `Reservation_hospitalId_fkey` FOREIGN KEY (`hospitalId`) REFERENCES `Hospital`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reviews` ADD CONSTRAINT `Reviews_posterId_fkey` FOREIGN KEY (`posterId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reviews` ADD CONSTRAINT `Reviews_hospitalId_fkey` FOREIGN KEY (`hospitalId`) REFERENCES `Hospital`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Favorite` ADD CONSTRAINT `Favorite_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Favorite` ADD CONSTRAINT `Favorite_hospitalId_fkey` FOREIGN KEY (`hospitalId`) REFERENCES `Hospital`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Image` ADD CONSTRAINT `Image_kidId_fkey` FOREIGN KEY (`kidId`) REFERENCES `Kid`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Image` ADD CONSTRAINT `Image_hospitalId_fkey` FOREIGN KEY (`hospitalId`) REFERENCES `Hospital`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
