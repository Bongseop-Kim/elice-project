import { User } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export enum Role {
  client = 'client',
  manager = 'manager',
  admin = 'admin'
}

export class UserEntity implements User {
  
  @ApiProperty({
    example: 1
  })
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @ApiProperty({
    example: '홍길동'
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'email@e.mail'
  })
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsOptional()
  emailVerified: Date;

  @ApiProperty({
    example:'password'
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    example:'010-0000-0000'
  })
  @IsString()
  @IsNotEmpty()
  phoneNumber: string;

  @ApiProperty({
    example: 'client',
    enum: Role,
  })
  @IsString()
  @IsNotEmpty()
  role: Role;

  @ApiProperty()
  @IsOptional()
  createdAt: Date;

  @ApiProperty()
  @IsOptional()
  updatedAt: Date;

  @ApiProperty()
  @IsString()
  @IsOptional()
  hospitalId: string;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  adminVerified: boolean;

  @ApiProperty()
  @IsString()
  @IsOptional()
  address: string;
}
