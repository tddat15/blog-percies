import { Body, Controller, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { LoginRequestBody } from './login.request-body';
import { LoginService } from './login.service';

@ApiBearerAuth()
@ApiTags('Auth')
@Controller('login')
export class CreateUserController {
  constructor(private readonly loginRequestBody: LoginService) {}

  @Post()
  async post(@Body() option: LoginRequestBody) {
    return await this.loginRequestBody.login(option);
  }
}
