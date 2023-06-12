import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { MappedType } from '@nestjs/mapped-types';
import { Gender } from '../entities/kid.entity'

export class RegistKidDto {
  @ApiProperty({
    required: false
  })
  @IsString()
  @IsOptional()
  name: string;

  @ApiProperty({
    required: false,
    example: 'male',
    enum: Gender
  })
  @IsString()
  @IsOptional()
  gender: Gender;

  @ApiProperty({
    required: false
  })
  @IsString()
  @IsOptional()
  birth: string;

  @ApiProperty({
    example: 1
  })
  @IsNumber()
  @IsNotEmpty()
  parentId: number;

  @ApiProperty({
    required: false
  })
  @IsString()
  @IsOptional()
  memo: string;
}

export class UpdateKidDto {
  @ApiProperty({
    required: false,
    example: '가은'
  })
  @IsString()
  @IsOptional()
  name: string;

  @ApiProperty({
    required: false,
    example: 'male',
    enum: Gender
  })
  @IsString()
  @IsOptional()
  gender: Gender;

  @ApiProperty({
    required: false,
    example: '2004-12-12'
  })
  @IsString()
  @IsOptional()
  birth: string;

  @ApiProperty({
    required: false,
    example: '알레르기'
  })
  @IsString()
  @IsOptional()
  memo: string;

  @ApiProperty({
    required: false,
    example: 1
  })
  @IsNumber()
  @IsOptional()
  parentId: number;
}

export class GetKidsDto extends PartialType(RegistKidDto){}

export type RegistKidInput = Omit<RegistKidDto, 'gender'> & { gender : Gender };

export type UpdateKidInput = Omit<UpdateKidDto, 'gender'> & { gender: Gender };
