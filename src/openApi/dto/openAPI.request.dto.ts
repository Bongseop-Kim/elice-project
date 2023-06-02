import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class OpenApiAddrDto {
    @ApiProperty({
        example: '서울특별시',
        description: 'Q0'
    })
    Q0: string;

    @ApiProperty({
        example: '종로구',
        description: 'Q1'
    })
    Q1: string;

    @ApiProperty({
        example: '세브란스',
        description: 'QN'
    })
    QN: string;

    @ApiProperty({
        example: '1',
        description: 'pageNo'
    })
    pageNo: string;
}

export class OpenApiGPSDto {
    @ApiProperty({
        example: '127.000',
        description: 'WGS84_LON',
        required: true
    })
    @IsString()
    @IsNotEmpty()
    WGS84_LON: string;

    @ApiProperty({
        example: '127.000',
        description: 'WGS84_LAT',
        required: true
    })
    @IsString()
    @IsNotEmpty()
    WGS84_LAT: string;

    @ApiProperty({
        example: '10',
        description: 'numOfRows'
    })
    numOfRows: string;
}

export class OpenApiInfoDto {
    @ApiProperty({
        example: 'A0000028',
        description: 'hpid',
        required: true
    })
    @IsString()
    @IsNotEmpty()
    hpid: string;
}