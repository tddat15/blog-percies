import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import * as useCases from './application';

const applications = Object.values(useCases);
const controllers = applications.filter((x) => x.name.endsWith('Controller'));
const services = applications.filter((x) => x.name.endsWith('Service'));

@Module({
  imports: [JwtModule.register({}), ConfigModule],
  controllers: [...controllers],
  providers: [...services],
  exports: [],
})
export class AuthModule {}
