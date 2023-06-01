import { ApiProperty } from '@nestjs/swagger';

export class FavorateDto {
    @ApiProperty()
    id: string

    @ApiProperty()
    posterid: string

    @ApiProperty()
    hospitalid: string
}