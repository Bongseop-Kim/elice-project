import { ApiProperty } from '@nestjs/swagger';
import { User, Child } from '@prisma/client';

export class ChildEntity implements Child {
    @ApiProperty()
    id: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    gender: string;

    @ApiProperty()
    birth: string;

    @ApiProperty()
    img: string | null;

    @ApiProperty()
    memo: string[];

    @ApiProperty()
    parent: User;

    @ApiProperty()
    parentId: string;
}