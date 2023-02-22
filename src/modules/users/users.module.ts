import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma';
import * as useCases from './application';

const applications = Object.values(useCases);
const controllers = applications.filter((x) => x.name.endsWith('Controller'));
const services = applications.filter((x) => x.name.endsWith('Service'));

@Module({
  controllers: [...controllers],
  providers: [...services, PrismaService],
  exports: [],
})
export class UserModule {}
