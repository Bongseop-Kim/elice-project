import { ApiProperty } from '@nestjs/swagger';

export class VoteTag {
    @ApiProperty()
    hospitalId: string;

    @ApiProperty()
    vote: number;

    @ApiProperty()
    posterId: number;
}