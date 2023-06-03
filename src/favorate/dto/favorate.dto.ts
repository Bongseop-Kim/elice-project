import { ApiProperty } from '@nestjs/swagger';

export class FavorateDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  posterid: number;

  @ApiProperty()
  hospitalid: string;
}
