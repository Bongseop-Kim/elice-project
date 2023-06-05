import { ApiProperty } from '@nestjs/swagger';
import { User, Kid } from '@prisma/client';

export class KidEntity implements Kid {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  gender: string;

  @ApiProperty()
  birth: string;

  @ApiProperty()
  memo: string;

  @ApiProperty()
  parent: User;

  @ApiProperty()
  parentId: number;
}
