import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  id: number;

  @ApiProperty({ required: false })
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
