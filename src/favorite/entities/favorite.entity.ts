import { ApiProperty } from '@nestjs/swagger';
import { Favorite } from '@prisma/client';

export class FavoriteEntity implements Favorite {
  @ApiProperty()
  id: number;

  @ApiProperty()
  userId: number;

  @ApiProperty()
  hospitalId: string;
}
