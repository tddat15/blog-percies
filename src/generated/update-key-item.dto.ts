import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateKeyItemDto {
  @ApiProperty({
    required: false,
  })
  @IsOptional()
  @IsString()
  key_group?: string;
  @ApiProperty({
    required: false,
  })
  @IsOptional()
  @IsString()
  key_code?: string;
  @ApiProperty({
    required: false,
    nullable: true,
  })
  @IsOptional()
  @IsString()
  key_value?: string | null;
  @ApiProperty({
    required: false,
    nullable: true,
  })
  @IsOptional()
  @IsString()
  comment?: string | null;
}
