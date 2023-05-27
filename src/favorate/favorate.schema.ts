import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Document } from 'mongoose';

const options: SchemaOptions = {
    collection: 'favorate',
}

@Schema(options)
export class Favorate extends Document {
    @ApiProperty({
        example: 'hosId',
        description: 'hospital / refer: hospitalAPI',
        required: true
    })
    @Prop({
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    hospital: string;

    @ApiProperty({
        example: '632vewf24245t',
        description: 'poster / refer: userDocument',
        required: true
    })
    @Prop({
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    poster: string;

    readonly readOnlyData: {
        hospital: string;
        poster: string;
    }
}

export const _FavorateSchema = SchemaFactory.createForClass(Favorate);

_FavorateSchema.virtual('readOnlyData').get(function (this: Favorate) {
    return {
        hospital: this.hospital,
        poster: this.poster
    }
})

export const FavorateSchema = _FavorateSchema