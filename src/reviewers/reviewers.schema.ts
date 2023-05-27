import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Document } from 'mongoose';

const options: SchemaOptions = {
    collection: 'reviewers',
}

@Schema(options)
export class Reviewers extends Document {
    @ApiProperty({
        example: '21110527_17:00',
        description: 'time',
        required: true
    })
    @Prop({
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    time: string;

    @ApiProperty({
        example: '632ef2rwrw23',
        description: 'poster / refer:userDocument',
        required: true
    })
    @Prop({
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    poster: string;

    @ApiProperty({
        example: 'hosId',
        description: 'hospital / refer:hospitalAPI',
        required: true
    })
    @Prop({
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    hospital: string;

    @ApiProperty({
        example: '아이가치료를받고암이나았습니다',
        description: 'content',
        required: true
    })
    @Prop({
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    content: string;

    readonly readOnlyData: {
        time: string;
        poster: string;
        hospital: string;
        content: string
    }
}

export const _ReviewersSchema = SchemaFactory.createForClass(Reviewers);

_ReviewersSchema.virtual('readOnlyData').get(function (this: Reviewers) {
    return {
        time: this.time,
        poster: this.poster,
        hospital: this.hospital,
        content: this.content
    }
})

export const ReviewersSchema = _ReviewersSchema