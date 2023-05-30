import { ApiProperty } from '@nestjs/swagger';
import { User, Reviewers } from '@prisma/client';

class ReviewersEntities implements Reviewers {
    @ApiProperty()
    id: string;

    @ApiProperty()
    poster: User;

    @ApiProperty()
    posterId: string;

    @ApiProperty()
    hospital: string;

    @ApiProperty()
    vote: number;
}