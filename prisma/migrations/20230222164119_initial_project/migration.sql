/*
  Warnings:

  - You are about to drop the `blog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `key_item` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "blog";

-- DropTable
DROP TABLE "key_item";

-- DropTable
DROP TABLE "user";

-- CreateTable
CREATE TABLE "Blog" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "title" VARCHAR NOT NULL,
    "description" VARCHAR,
    "author" VARCHAR(150),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "content" TEXT NOT NULL,
    "updated_at" TIMESTAMPTZ(6),

    CONSTRAINT "pk_identity" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KeyItem" (
    "key_group" VARCHAR(25) NOT NULL,
    "key_code" VARCHAR(100) NOT NULL,
    "key_value" VARCHAR(255),
    "comment" VARCHAR,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "KeyItem_pkey" PRIMARY KEY ("key_group","key_code")
);

-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "username" VARCHAR(50) NOT NULL,
    "email" VARCHAR NOT NULL,
    "password" VARCHAR(50) NOT NULL,

    CONSTRAINT "pk_user" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
