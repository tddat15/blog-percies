import { Logger } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common/exceptions';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { CreateUserRequestBody } from './createUser.request-body';

export class CreateUserService {
  private readonly logger = new Logger(CreateUserService.name);

  constructor(
    private readonly prisma = new PrismaClient({ log: ['query', 'info', 'warn', 'error'] }), // private readonly dbContext: PrismaService,
  ) {}

  public async createUser(option: CreateUserRequestBody): Promise<void> {
    const { password, username, email, firstName, lastName } = option;

    const checkUsernameExists = await this.prisma.user.findMany({
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

    await this.prisma.user.create({
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
