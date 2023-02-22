import { ApiProperty } from '@nestjs/swagger';
import { MaxLength } from 'class-validator';

export class CreateUserRequestBody {
  @ApiProperty({
    description: 'username',
    example: 'dat_thai',
  })
  @MaxLength(50)
  username: string;

  @ApiProperty({
    description: 'password',
    example: 'Abcd@1234',
  })
  @MaxLength(50)
  password: string;

  @ApiProperty({
    description: 'email',
    example: 'thaidat01222@gmail.com',
  })
  @MaxLength(50)
  email: string;
}
