import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  id: string;

  @ApiProperty({ required: false })
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty({ required: false})
  phoneNumber: string;

  @ApiProperty({ required: false })
  reserved: string[] | [];

  @ApiProperty({ required: false })
  haveChild: string[] | [];
  
  @ApiProperty({ required: false })
  review: string[] | [];

  @ApiProperty({ required: false })
  favorate: string[] | [];

  @ApiProperty({ required: false })
  regDate: string;

  @ApiProperty({ required: false })
  hospitalName: string;

  @ApiProperty({ required: false })
  verified: boolean;

  @ApiProperty()
  role: number;
}
