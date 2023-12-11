/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `subject` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Reservation` table. All the data in the column will be lost.
  - You are about to alter the column `name` on the `Reservation` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `phone` on the `Reservation` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `branch` on the `Reservation` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.

*/
-- DropIndex
DROP INDEX `Reservation_name_key` ON `Reservation`;

-- DropIndex
DROP INDEX `Reservation_phone_key` ON `Reservation`;

-- AlterTable
ALTER TABLE `Reservation` DROP COLUMN `createdAt`,
    DROP COLUMN `subject`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `message` VARCHAR(191) NULL,
    MODIFY `name` VARCHAR(191) NOT NULL,
    MODIFY `phone` VARCHAR(191) NOT NULL,
    MODIFY `date` DATETIME(3) NOT NULL,
    MODIFY `time` VARCHAR(191) NOT NULL,
    MODIFY `branch` VARCHAR(191) NOT NULL;
