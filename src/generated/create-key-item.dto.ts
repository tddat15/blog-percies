import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateKeyItemDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  key_group: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  key_code: string;
  @ApiProperty({
    required: false,
    nullable: true,
  })
  @IsOptional()
  @IsString()
  key_value?: string;
  @ApiProperty({
    required: false,
    nullable: true,
  })
  @IsOptional()
  @IsString()
  comment?: string;
}
