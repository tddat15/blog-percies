import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ConnectBlogDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  id: string;
}
