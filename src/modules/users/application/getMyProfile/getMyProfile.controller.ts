import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { GetUser } from 'src/modules/auth/decorator/user.decorator';
import { MyJwtGuard } from '../../../auth/guard/myjwt.guard';
import { GetMyProfileService } from './getMyProfile.service';

@ApiBearerAuth()
@ApiTags('User')
@Controller('user')
export class GetMyProfileController {
  constructor(private readonly getMyProfileService: GetMyProfileService) {}

  @UseGuards(MyJwtGuard)
  // @UseGuards(AuthGuard('jwt'))
  @Get('me')
  async getMyProfile(@GetUser() user: User) {
    return user;
  }
}
