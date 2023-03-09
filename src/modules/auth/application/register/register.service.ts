import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../prisma/prisma.service';

@Injectable()
export class RegisterService {
  constructor(private prismaService: PrismaService) {}

  async register(): Promise<void> {
    //
  }
}
