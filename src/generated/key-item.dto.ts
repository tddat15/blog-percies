import { ApiProperty } from '@nestjs/swagger';

export class KeyItemDto {
  @ApiProperty({
    required: false,
  })
  key_group: string;
  @ApiProperty({
    required: false,
  })
  key_code: string;
  @ApiProperty({
    required: false,
    nullable: true,
  })
  key_value: string | null;
  @ApiProperty({
    required: false,
    nullable: true,
  })
  comment: string | null;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    required: false,
  })
  created_at: Date;
}
