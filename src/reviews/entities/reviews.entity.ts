import { ApiProperty } from '@nestjs/swagger';
import { User, Reviews } from '@prisma/client';

class ReviewsEntities implements Reviews {
  @ApiProperty()
  id: number;

  @ApiProperty()
  posterId: number;

  @ApiProperty()
  hospitalId: string;

  @ApiProperty()
  vote: number;
}
