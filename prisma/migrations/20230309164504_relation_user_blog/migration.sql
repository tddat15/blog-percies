/*
  Warnings:

  - You are about to drop the column `author` on the `blog` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `blog` table. All the data in the column will be lost.
  - You are about to drop the `key_item` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `user_id` to the `blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_name` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_name` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "blog" DROP COLUMN "author",
DROP COLUMN "updated_at",
ADD COLUMN     "update_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "user_id" UUID NOT NULL;

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "first_name" VARCHAR(255) NOT NULL,
ADD COLUMN     "last_name" VARCHAR(255) NOT NULL;

-- DropTable
DROP TABLE "key_item";

-- CreateIndex
CREATE INDEX "ixpk_blog_id" ON "blog"("id");

-- CreateIndex
CREATE INDEX "ixpk_user_id" ON "user"("id");

-- AddForeignKey
ALTER TABLE "blog" ADD CONSTRAINT "blog_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
