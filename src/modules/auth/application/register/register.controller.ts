import { Body, Controller, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { RegisterRequestBody } from './register.request-body';
import { RegisterService } from './register.service';
@ApiBearerAuth()
@ApiTags('Auth')
@Controller('register')
export class RegisterController {
  constructor(private readonly registerRequestBody: RegisterService) {}

  @Post()
  async post(@Body() option: RegisterRequestBody) {
    return await this.registerRequestBody.register(option);
  }
}
