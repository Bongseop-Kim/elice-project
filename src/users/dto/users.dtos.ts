import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ required: false })
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty({ required: false})
  phoneNumber: string;
}

export class UpdateUserDto {
  @ApiProperty({ required: false })
  name: string;

  @ApiProperty({ required: false })
  email: string;

  @ApiProperty({ required: false })
  emailVerified: Date;

  @ApiProperty({ required: false })
  address: string;

  @ApiProperty({ required: false })
  password: string;
  
  @ApiProperty({ required: false })
  phoneNumber: string;
}