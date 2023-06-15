import { ApiProperty } from '@nestjs/swagger';
import { Image } from '@prisma/client';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class ImageEntity implements Image {
  @ApiProperty({
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @ApiProperty({
    example:
      'https://devtie.s3.ap-northeast-2.amazonaws.com/1686060931807KakaoTalk_Photo_2023-03-14-13-39-36%20001.jpeg',
  })
  @IsString()
  @IsNotEmpty()
  imageUrl: string;

  @ApiProperty({
    example: 'sample.jpeg',
  })
  @IsString()
  @IsNotEmpty()
  imageName: string;

  @ApiProperty({
    example: 1,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  kidId: number;

  @ApiProperty({
    example: 'A2105649',
    required: false,
  })
  @IsOptional()
  @IsString()
  hospitalId: string;
}
