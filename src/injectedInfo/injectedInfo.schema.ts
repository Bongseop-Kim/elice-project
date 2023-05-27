import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Document } from 'mongoose';

const options: SchemaOptions = {
    collection: 'injectedInfo',
}

@Schema(options)
export class InjectedInfo extends Document {
    @ApiProperty({
        example: '홍역예방주사',
        description: 'name',
        required: true
    })
    @Prop({
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        example: '632qwfqfqfdq1231',
        description: 'injectedChild / refer: childDocument',
        required: true
    })
    @Prop({
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    injectedChild: string;

    @ApiProperty({
        example: '632qwfergfdq1231',
        description: 'inject / refer: injectionDocument',
        required: true
    })
    @Prop({
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    inject: string;

    @ApiProperty({
        example: '21030101',
        description: 'injectedDate',
        required: true
    })
    @Prop({
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    injectedDate: string;

    readonly readOnlyData: {
        id: string;
        name: string;
        injectedChild: string;
        inject: string;
        injectedDate: string;
    }
}

export const _InjectedInfoSchema = SchemaFactory.createForClass(InjectedInfo);

_InjectedInfoSchema.virtual('readOnlyData').get(function (this: InjectedInfo) {
    return {
        name: this.name,
        injectedChild: this.injectedChild,
        inject: this.inject,
        injectedDate: this.injectedDate
    }
})

export const InjectedInfoSchema = _InjectedInfoSchema