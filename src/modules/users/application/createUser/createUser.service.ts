import { Logger } from '@nestjs/common';
import bcrypt from 'bcrypt';
import { PrismaService } from 'src/modules/prisma';
import { CreateUserRequestBody } from './createUser.request-body';

export class CreateUserService {
  private readonly logger = new Logger(CreateUserService.name);
  constructor(private readonly dbContext: PrismaService) {}

  public async createUser(option: CreateUserRequestBody) {
    const { password, username } = option;

    const checkUsernameExists = await this.dbContext.user.findMany({
      where: {
        username: {
          contains: username,
        },
      },
    });

    if (checkUsernameExists.length > 0) {
      throw new Error(`This username already exists`);
    }

    const hashPassword = bcrypt.hash(password, 10);

    console.log('aaaaaaaaaaaaaaaaa', hashPassword);
    return hashPassword;
  }
}
