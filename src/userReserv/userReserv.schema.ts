import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Document } from 'mongoose';

const options: SchemaOptions = {
    collection: 'userReserv',
}

@Schema(options)
export class UserReserv extends Document {
    @ApiProperty({
        example: '632fege3456f',
        description: 'whosReservation / refer: userDocument',
        required: true
    })
    @Prop({
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    whosReservation: string;

    @ApiProperty({
        example: 'hosId',
        description: 'reservedHos / refer: hospitalApi',
        required: true
    })
    @Prop({
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    reservedHos: string;

    @ApiProperty({
        example: '21110527일 11시 15분',
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
        example: '21110527일 16:00',
        description: 'hospitalPart / refer: hosReservDocument',
        required: true
    })
    @Prop({
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    hospitalPart: string;

    readonly readOnlyData: {
        whosReservation: string;
        reservedHos: string;
        time: string;
        hospitalPart: string;
    }
}

export const _UserReservSchema = SchemaFactory.createForClass(UserReserv);

_UserReservSchema.virtual('readOnlyData').get(function (this: UserReserv) {
    return {
        whosReservation: this.whosReservation,
        reservedHos: this.reservedHos,
        time: this.time,
        hospitalPart: this.hospitalPart
    }
})

export const UserReservSchema = _UserReservSchema