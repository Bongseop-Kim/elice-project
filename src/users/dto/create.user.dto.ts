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
}
