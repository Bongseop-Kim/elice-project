import { ApiProperty } from '@nestjs/swagger';
import { Reviews } from '@prisma/client';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export enum Vote {
  kindDoctor = 'kindDoctor',
  professional = 'professional',
  kindEmployee = 'kindEmployee',
  goodReceipt = 'goodReceipt',
  cleanHospital = 'cleanHospital',
  goodTraffic = 'goodTraffic',
}

export class ReviewsEntities implements Reviews {
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
  @IsOptional()
  posterId: number;

  @ApiProperty({
    example: 'A1100401',
  })
  @IsString()
  @IsOptional()
  hospitalId: string;

  @ApiProperty({
    example: 1,
    enum: Vote,
  })
  @IsString()
  @IsOptional()
  vote: Vote;
}
