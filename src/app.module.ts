import { Module } from '@nestjs/common';
import { PrismaModule } from './modules/prisma';
import { UserModule } from './modules/users';

@Module({
  imports: [UserModule, PrismaModule],
})
export class AppModule {}
