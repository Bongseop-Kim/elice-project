import { ApiProperty, PartialType } from '@nestjs/swagger';

export class RegistKidDto {
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

export class UpdateKidDto {
  @ApiProperty({ required: false })
  name: string;

  @ApiProperty({ required: false })
  gender: string;

  @ApiProperty({ required: false })
  birth: string;

  @ApiProperty({ required: false })
  memo: string;

  @ApiProperty({ required: false })
  parentId: number;
}

export class GetKidsDto extends PartialType(RegistKidDto){}
