import { Body, Controller, Post } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { CreateUserRequestBody } from './createUser.request-body';
import { CreateUserService } from './createUser.service';

@ApiBearerAuth()
@Controller('user')
export class CreateUserController {
  constructor(private readonly createUserService: CreateUserService) {}

  @Post()
  async post(@Body() option: CreateUserRequestBody) {
    return await this.createUserService.createUser(option);
  }
}
