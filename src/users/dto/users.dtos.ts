import { ApiProperty, PickType } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    required: false,
    example: '홍길동'  
  })
  @IsString()
  @IsOptional()
  name: string;

  @ApiProperty({
    example: 'email@e.mail'
  })
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: 'password'
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    required: false,
    example: '서울시 강남구'
  })
  @IsString()
  @IsNotEmpty()
  phoneNumber: string;
}

export class UpdateUserDto {
  @ApiProperty({
    required: false,
    example: '홍길동'
  })
  @IsString()
  @IsOptional()
  name: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  email: string;

  @ApiProperty({
    required: false,
    example: '서울시 강남구'
  })
  @IsString()
  @IsOptional()
  address: string;

  @ApiProperty({
    required: false,
    example: 'password'
  })
  @IsString()
  @IsOptional()
  password: string;

  @ApiProperty({
    required: false,
    example: '010-0000-0000'
  })
  @IsString()
  @IsOptional()
  phoneNumber: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  role: string;
}

export class CreateManagerDto extends PickType(CreateUserDto, [
  'name',
  'email',
  'password',
  'phoneNumber'
]) {
  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  adminVerified: boolean;

  @ApiProperty({
    example: 'A1100401'
  })
  @IsString()
  @IsNotEmpty()
  hospitalId: string;
}
