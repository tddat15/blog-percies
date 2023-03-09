import { Body, Controller, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateUserRequestBody } from './createUser.request-body';
import { CreateUserService } from './createUser.service';

@ApiBearerAuth()
@ApiTags('User')
@Controller('user')
export class CreateUserController {
  constructor(private readonly createUserService: CreateUserService) {}

  @Post()
  async post(@Body() option: CreateUserRequestBody) {
    return await this.createUserService.createUser(option);
  }
}
