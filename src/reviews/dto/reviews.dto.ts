import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class VoteTag {
    @ApiProperty({
        example: 'A1100401'
    })
    @IsString()
    @IsOptional()
    hospitalId: string;

    @ApiProperty({
        example: 1
    })
    @IsNumber()
    @IsOptional()
    vote: number;

    @ApiProperty({
        required: false,
        example: 1
    })
    @IsNumber()
    @IsOptional()
    posterId: number;
}