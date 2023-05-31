import { ApiProperty } from '@nestjs/swagger';
import { User, Reviews } from '@prisma/client';

class ReviewsEntities implements Reviews {
    @ApiProperty()
    id: string;

    @ApiProperty()
    poster: User;

    @ApiProperty()
    posterId: string;

    @ApiProperty()
    hospitalId: string;

    @ApiProperty()
    vote: number;
}