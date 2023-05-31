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
  role: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  hospitalId: string;

  @ApiProperty()
  adminVerified: boolean;

  @ApiProperty()
  favoriteHospitals: string[];
  
  @ApiProperty()
  review: string[]

  @ApiProperty()
  reserved: string[]

  @ApiProperty()
  address: string | null;
}
