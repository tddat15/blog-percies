import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import * as useCases from './application';

const applications = Object.values(useCases);
const controllers = applications.filter((x) => x.name.endsWith('Controller'));
const services = applications.filter((x) => x.name.endsWith('Service'));

@Module({
  imports: [PrismaModule],
  controllers: [...controllers],
  providers: [...services],
  exports: [],
})
export class UserModule {}
