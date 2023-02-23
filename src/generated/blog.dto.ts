import { ApiProperty } from '@nestjs/swagger';

export class BlogDto {
  @ApiProperty({
    required: false,
  })
  id: string;
  @ApiProperty({
    required: false,
  })
  title: string;
  @ApiProperty({
    required: false,
    nullable: true,
  })
  description: string | null;
  @ApiProperty({
    required: false,
    nullable: true,
  })
  author: string | null;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    required: false,
  })
  created_at: Date;
  @ApiProperty({
    required: false,
  })
  content: string;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    required: false,
    nullable: true,
  })
  updated_at: Date | null;
}
