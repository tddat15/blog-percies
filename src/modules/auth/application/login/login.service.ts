import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginRequestBody } from './login.request-body';

@Injectable()
export class LoginService {
  private readonly logger = new Logger(LoginService.name);

  constructor(
    // private readonly prisma = new PrismaClient({ log: ['query', 'info', 'warn', 'error'] }),
    private readonly dbContext: PrismaService,
    private readonly jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  public async login(option: LoginRequestBody): Promise<string> {
    const { password, username } = option;

    const user = await this.dbContext.user.findUnique({
      where: {
        username: username,
      },
    });

    if (!user) {
      throw new BadRequestException('User or password is incorrect');
    }

    const passwordMatched = await bcrypt.compare(password, user.password);

    if (!passwordMatched) {
      throw new BadRequestException('User or password is incorrect');
    }
    console.log(user.id, user.email);

    const token = await this.convertToJwtString(user.id, user.email);

    return token;
  }

  async convertToJwtString(userId: string, email: string): Promise<string> {
    const payload = {
      sub: userId,
      email,
    };

    const a = this.configService.get('JWT_SECRET');

    console.log(a);

    return this.jwtService.signAsync(payload, {
      expiresIn: '10m',
      secret: a,
    });
  }
}
