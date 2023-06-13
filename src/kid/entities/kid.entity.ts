import { ApiProperty } from '@nestjs/swagger';
import { User, Kid } from '@prisma/client';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export enum Gender {
  male= 'male',
  female= 'female',
}

export class KidEntity implements Kid {

  @ApiProperty({
    example: 1
  })
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @ApiProperty({
    example:'가은'
  })
  @IsString()
  @IsOptional()
  name: string;

  @ApiProperty({
    example:'male',
    enum: Gender,
  })
  @IsString()
  @IsOptional()
  gender: Gender;

  @ApiProperty({
    example:'2004-12-12'
  })
  @IsString()
  @IsOptional()
  birth: string;

  @ApiProperty({
    example:'알레르기'
  })
  @IsString()
  @IsOptional()
  memo: string;

  @ApiProperty({
    example:1
  })
  @IsNumber()
  @IsOptional()
  parentId: number;
}
