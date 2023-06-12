import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Vote } from '../entities/reviews.entity'
import { MappedType } from '@nestjs/mapped-types'


export class VoteTag {
    @ApiProperty({
        example: 'A1100401'
    })
    @IsString()
    @IsOptional()
    hospitalId: string;

    @ApiProperty({
        example: 'kindDoctor',
        enum: Vote,
    })
    @IsString()
    @IsOptional()
    vote: Vote;

    @ApiProperty({
        required: false,
        example: 1
    })
    @IsNumber()
    @IsOptional()
    posterId: number;
}

export type VoteTagInput = Omit<VoteTag, 'vote'> & { vote : Vote };