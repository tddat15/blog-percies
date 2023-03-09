import { ApiProperty } from '@nestjs/swagger';
import { MaxLength } from 'class-validator';

export class LoginRequestBody {
  @ApiProperty({
    description: 'Username',
    example: 'dat_thai',
  })
  @MaxLength(50)
  username: string;

  @ApiProperty({
    description: 'Password',
    example: 'Abcd@1234',
  })
  @MaxLength(50)
  password: string;
}
