import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterRequestBody } from './register.request-body';

@Injectable()
export class RegisterService {
  private readonly logger = new Logger(RegisterService.name);

  constructor(private readonly dbContext: PrismaService) {}

  async register(option: RegisterRequestBody): Promise<void> {
    const { password, username, email, firstName, lastName } = option;

    const checkUsernameExists = await this.dbContext.user.findMany({
      where: {
        OR: [
          {
            username: {
              contains: username,
              mode: 'insensitive',
            },
          },
          {
            email: {
              contains: email,
              mode: 'insensitive',
            },
          },
        ],
      },
    });

    if (checkUsernameExists.length > 0 && checkUsernameExists[0].username === username) {
      throw new BadRequestException(`This username already exists`);
    }

    if (checkUsernameExists.length > 0 && checkUsernameExists[0].email === email) {
      throw new BadRequestException(`This email already exists`);
    }

    const hashPassword = await bcrypt.hash(password, 10);

    console.log(hashPassword);

    await this.dbContext.user.create({
      data: {
        username,
        password: hashPassword,
        email,
        firstName,
        lastName,
      },
      select: {
        username: true,
      },
    });
  }
}
