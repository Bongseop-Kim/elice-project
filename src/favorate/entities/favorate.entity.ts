import { ApiProperty } from '@nestjs/swagger';
import { User, Favorate } from '@prisma/client';

class FavorateEntities implements Favorate {
    @ApiProperty()
    id: string;

    @ApiProperty()
    poster: User;

    @ApiProperty()
    posterId: string;

    @ApiProperty()
    hospital: string;

    @ApiProperty()
    hospitalId: string;
}