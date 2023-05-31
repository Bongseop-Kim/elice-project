import { ApiProperty } from '@nestjs/swagger';

export class RegistChildDto {
    @ApiProperty({ required: false})
    img: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    gender: string;

    @ApiProperty()
    birth: string;

    @ApiProperty()
    parentId: string;

    @ApiProperty({ required: false })
    memo: string;
}