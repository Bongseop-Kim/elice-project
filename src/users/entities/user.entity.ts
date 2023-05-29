import { User } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class UserEntity implements User {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  emailVerified: Date;

  @ApiProperty()
  password: string;

  @ApiProperty()
  phoneNumber: string;

  @ApiProperty()
  role: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  registeredHospital: string;

  @ApiProperty()
  adminVerified: boolean;

  @ApiProperty()
  favoriteHospitals: string;

  @ApiProperty()
  haveChild: string[]

  @ApiProperty()
  review: string[]

  @ApiProperty()
  reserved: string[]
}
