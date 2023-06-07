import { ApiProperty } from '@nestjs/swagger';
import { User, Reviews } from '@prisma/client';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

class ReviewsEntities implements Reviews {
  @ApiProperty({
    example:1
  })
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @ApiProperty({
    example:1
  })
  @IsNumber()
  @IsNotEmpty()
  posterId: number;

  @ApiProperty({
    example:'A1100401'
  })
  @IsString()
  @IsNotEmpty()
  hospitalId: string;

  @ApiProperty({
    example: 1
  })
  @IsNumber()
  @IsNotEmpty()
  vote: number;
}
