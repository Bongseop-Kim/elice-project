import { ApiProperty } from '@nestjs/swagger';
import { User, Reviews } from '@prisma/client';

class ReviewsEntities implements Reviews {
    @ApiProperty()
    id: number;

    @ApiProperty()
    poster: User;

    @ApiProperty()
    posterId: number;

    @ApiProperty()
    hospitalId: number;

    @ApiProperty()
    vote: number;
}