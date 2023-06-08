import { ApiProperty } from '@nestjs/swagger';
import { Hospital } from '@prisma/client';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class HospitalEntity implements Hospital {
  @ApiProperty({
    example: 'A1100401',
  })
  @IsString()
  @IsNotEmpty()
  id: string;

  @ApiProperty({
    example: '서울특별시 송파구 송파대로 371, 2층,3층,4층 (석촌동)',
  })
  @IsString()
  @IsNotEmpty()
  dutyAddr: string;

  @ApiProperty({
    example: '서울특별시',
  })
  @IsString()
  @IsNotEmpty()
  dutyAddr1Depth: string;

  @ApiProperty({
    example: '송파구',
  })
  @IsString()
  @IsNotEmpty()
  dutyAddr2Depth: string;

  @ApiProperty({
    example: '송파대로 371, 2층,3층,4층 (석촌동)',
  })
  @IsString()
  @IsNotEmpty()
  dutyAddr3Depth: string;

  @ApiProperty({
    example:
      '요일 휴진\n토요일,공휴일 (외래 휴진)투석실만 운영\n월요일~금요일 외래(물리치료실)는 09:00~18:00',
  })
  @IsOptional()
  @IsString()
  dutyEtc: string;

  @ApiProperty({
    example: '(스카이메디)연세건강증진내과의원',
  })
  @IsNotEmpty()
  @IsString()
  dutyName: string;

  @ApiProperty({
    example: '1900',
  })
  @IsOptional()
  @IsString()
  dutyTel1: string;

  @ApiProperty({
    example: '1900',
  })
  @IsOptional()
  @IsString()
  startLunch: string;

  @ApiProperty({
    example: '1900',
  })
  @IsOptional()
  @IsString()
  endLunch: string;

  @ApiProperty({
    example: '1900',
  })
  @IsOptional()
  @IsString()
  dutyTime1c: string;

  @ApiProperty({
    example: '1900',
  })
  @IsOptional()
  @IsString()
  dutyTime1s: string;

  @ApiProperty({
    example: '1900',
  })
  @IsOptional()
  @IsString()
  dutyTime2c: string;

  @ApiProperty({
    example: '1900',
  })
  @IsOptional()
  @IsString()
  dutyTime2s: string;

  @ApiProperty({
    example: '1900',
  })
  @IsOptional()
  @IsString()
  dutyTime3c: string;

  @ApiProperty({
    example: '1900',
  })
  @IsOptional()
  @IsString()
  dutyTime3s: string;

  @ApiProperty({
    example: '1900',
  })
  @IsOptional()
  @IsString()
  dutyTime4c: string;

  @ApiProperty({
    example: '1900',
  })
  @IsOptional()
  @IsString()
  dutyTime4s: string;

  @ApiProperty({
    example: '1900',
  })
  @IsOptional()
  @IsString()
  dutyTime5c: string;

  @ApiProperty({
    example: '1900',
  })
  @IsOptional()
  @IsString()
  dutyTime5s: string;

  @ApiProperty({
    example: '1900',
  })
  @IsOptional()
  @IsString()
  dutyTime6c: string;

  @ApiProperty({
    example: '1900',
  })
  @IsOptional()
  @IsString()
  dutyTime6s: string;

  @ApiProperty({
    example: '1900',
  })
  @IsOptional()
  @IsString()
  dutyTime7c: string;

  @ApiProperty({
    example: '1900',
  })
  @IsOptional()
  @IsString()
  dutyTime7s: string;

  @ApiProperty({
    example: '1900',
  })
  @IsOptional()
  @IsString()
  dutyTime8c: string;

  @ApiProperty({
    example: '1900',
  })
  @IsOptional()
  @IsString()
  dutyTime8s: string;

  @ApiProperty({
    example: '1900',
  })
  @IsOptional()
  @IsString()
  dutyTime9c: string;

  @ApiProperty({
    example: '1900',
  })
  @IsOptional()
  @IsString()
  dutyTime9s: string;

  @ApiProperty({
    example: '7월 1일 휴무입니다.',
  })
  @IsOptional()
  @IsString()
  notice: string;

  @ApiProperty({
    example: 37.5007795003494,
  })
  @IsOptional()
  @IsNumber()
  wgs84Lat: number;

  @ApiProperty({
    example: 127.1107520613008,
  })
  @IsOptional()
  @IsNumber()
  wgs84Lon: number;
}
