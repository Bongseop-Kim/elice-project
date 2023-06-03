import { ApiProperty } from '@nestjs/swagger';

export class RegistChildDto {
  @ApiProperty({ required: false })
  img: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  gender: string;

  @ApiProperty()
  birth: string;

  @ApiProperty()
  parentId: number;

  @ApiProperty({ required: false })
  memo: string;
}

export class UpdateChildDto {
  @ApiProperty({ required: false })
  img: string;

  @ApiProperty({ required: false })
  name: string;

  @ApiProperty({ required: false })
  gender: string;

  @ApiProperty({ required: false })
  birth: string;

  @ApiProperty({ required: false })
  memo: string;
}
