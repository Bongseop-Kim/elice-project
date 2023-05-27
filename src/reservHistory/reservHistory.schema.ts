import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Document } from 'mongoose';

const options: SchemaOptions = {
    collection: 'reservHistory',
}

@Schema(options)
export class ReservHistory extends Document {
    @ApiProperty({
        example: '632reewb324',
        description: 'user / refer: userDocument',
        required: true
    })
    @Prop({
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    user: string;

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
        example: '21110527_16:15',
        description: 'history',
        required: true
    })
    @Prop({
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    history: string;

    readonly readOnlyData: {
        user: string;
        hospital: string;
        history: string
    }
}

const _ReservHistorySchema = SchemaFactory.createForClass(ReservHistory);

_ReservHistorySchema.virtual('readOnlyData').get(function (this: ReservHistory) {
    return {
        user: this.user,
        hospital: this.hospital,
        history: this.history
    }
})

export const ReservHistorySchema = _ReservHistorySchema