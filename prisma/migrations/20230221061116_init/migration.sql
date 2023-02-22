-- Create extension to use the uuid generator
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";


-- CreateTable
CREATE TABLE "blog" (
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
CREATE TABLE "key_item" (
    "key_group" VARCHAR(25) NOT NULL,
    "key_code" VARCHAR(100) NOT NULL,
    "key_value" VARCHAR(255),
    "comment" VARCHAR,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "key_item_pkey" PRIMARY KEY ("key_group","key_code")
);

-- CreateTable
CREATE TABLE "user" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "username" VARCHAR(50) NOT NULL,
    "email" VARCHAR NOT NULL,
    "password" VARCHAR(50) NOT NULL,

    CONSTRAINT "pk_user" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
