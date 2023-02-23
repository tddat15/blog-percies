import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';

export class KeyItemKeyGroupKeyCodeUniqueInputDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  key_group: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  key_code: string;
}

@ApiExtraModels(KeyItemKeyGroupKeyCodeUniqueInputDto)
export class ConnectKeyItemDto {
  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => KeyItemKeyGroupKeyCodeUniqueInputDto)
  key_group_key_code: KeyItemKeyGroupKeyCodeUniqueInputDto;
}
