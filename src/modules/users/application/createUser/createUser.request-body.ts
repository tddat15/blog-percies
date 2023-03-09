import { ApiProperty } from '@nestjs/swagger';
import { MaxLength } from 'class-validator';

export class CreateUserRequestBody {
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

  @ApiProperty({
    description: 'Email',
    example: 'thaidat01222@gmail.com',
  })
  @MaxLength(50)
  email: string;

  @ApiProperty({
    description: 'Fist Name',
    example: 'dat',
  })
  @MaxLength(50)
  firstName: string;

  @ApiProperty({
    description: 'Last Name',
    example: 'thai',
  })
  @MaxLength(50)
  lastName: string;
}
