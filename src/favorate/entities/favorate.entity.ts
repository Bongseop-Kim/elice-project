import { ApiProperty } from '@nestjs/swagger';
import { User, Hospital, Favorate } from '@prisma/client';

class FavorateEntities implements Favorate {
    @ApiProperty()
    id: number;

    @ApiProperty()
    poster: User;

    @ApiProperty()
    posterId: number;

    @ApiProperty()
    hospital: Hospital;

    @ApiProperty()
    hospitalId: number;
}