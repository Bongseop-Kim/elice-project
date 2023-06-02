import { ApiProperty, PartialType, PickType } from '@nestjs/swagger';

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
  address: string;

  @ApiProperty({ required: false })
  password: string;
  
  @ApiProperty({ required: false })
  phoneNumber: string;
}

export class CreateManagerDto extends PickType(CreateUserDto, ['name', 'email', 'password', 'phoneNumber']) {
  @ApiProperty()
  adminVerified: string;

  @ApiProperty()
  hospitalId: number;

  @ApiProperty()
  role: string;
}