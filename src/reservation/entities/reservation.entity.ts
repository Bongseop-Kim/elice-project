import { ApiProperty } from '@nestjs/swagger';
import { Reservation } from '@prisma/client';
import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class ReservationEntity implements Reservation {
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

  @ApiProperty({
    example: '메모 내용입니다.',
  })
  @IsString()
  @IsOptional()
  memo: string;

  @ApiProperty({
    example: '10:00',
  })
  @IsString()
  @IsNotEmpty()
  reservedTime: string;

  @ApiProperty({
    example: false,
  })
  @IsBoolean()
  @IsNotEmpty()
  read: boolean;

  @ApiProperty({
    example: '20230607',
  })
  @IsDate()
  @IsNotEmpty()
  createdAt: Date;
}
