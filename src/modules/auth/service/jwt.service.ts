import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtService {
  private readonly secret = 'your_secret_key';

  sign(payload: any): string {
    return jwt.sign(payload, this.secret);
  }
}
