import { ApiProperty } from '@nestjs/swagger';
import { Favorite } from '@prisma/client';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class FavoriteEntity implements Favorite {
  @ApiProperty({
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @ApiProperty({
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @ApiProperty({
    example: 'A2105649',
  })
  @IsString()
  @IsNotEmpty()
  hospitalId: string;
}
