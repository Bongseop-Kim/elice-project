import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Document } from 'mongoose';

const options: SchemaOptions = {
    collection: 'hosReserv',
}

@Schema(options)
export class HosReserv extends Document {
    @ApiProperty({
        example: 'hosId',
        description: 'hospitalAPI',
        required: true
    })
    @Prop({
        required: true
    })
    @IsString()
    @IsNotEmpty()
    hospital: string

    @ApiProperty({
        example: '21110527',
        description: 'date',
        required: true
    })
    @Prop({
        required: true
    })
    @IsString()
    @IsNotEmpty()
    date: string

    @ApiProperty({
        example: '["1343efsef3"]',
        description: 'part / refer: userReservDocument',
        required: true
    })
    @Prop({
        required: true,
        defalut: []
    })
    part: string[]

    readonly readOnlyData: {
        hospital: string;
        date: string;
        part: string[]
    }
}

const _HosReservSchema = SchemaFactory.createForClass(HosReserv);

_HosReservSchema.virtual('readOnlyData').get(function (this: HosReserv) {
    return {
        hospital: this.hospital,
        date: this.date,
        part: this.part
    }
})

export const HosReservSchema = _HosReservSchema