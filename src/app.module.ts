import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/users';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UserModule, PrismaModule, AuthModule, ConfigModule],
})
export class AppModule {}
