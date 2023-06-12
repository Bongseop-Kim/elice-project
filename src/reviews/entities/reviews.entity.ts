import { ApiProperty } from '@nestjs/swagger';
import { User, Reviews } from '@prisma/client';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export enum Vote {
  kindDoctor = 'kindDoctor',
  professional = 'professional',
  kindEmployee = 'kindEmployee',
  goodReceipt = 'goodReceipt',
  cleanHospital = 'cleanHospital',
  goodTraffic = 'goodTraffic'
}

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
    example: 1,
    enum: Vote,
  })
  @IsString()
  @IsNotEmpty()
  vote: Vote;
}
