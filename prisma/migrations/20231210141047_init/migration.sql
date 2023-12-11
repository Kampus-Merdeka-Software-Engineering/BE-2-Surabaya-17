/*
  Warnings:

  - You are about to drop the column `name` on the `Branch` table. All the data in the column will be lost.
  - Added the required column `imageURL` to the `Branch` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageURL` to the `Specialties` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Branch_name_key` ON `Branch`;

-- AlterTable
ALTER TABLE `Branch` DROP COLUMN `name`,
    ADD COLUMN `imageURL` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `Specialties` ADD COLUMN `imageURL` VARCHAR(255) NOT NULL;
