import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Document } from 'mongoose';

const options: SchemaOptions = {
    collection: 'injection',
}

@Schema(options)
export class Injection extends Document {
    @ApiProperty({
        example: 'http://...',
        description: 'injectionImg',
        required: true
    })
    @Prop({
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    injectionImg: string;

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
        example: '홍역예방주사입니다',
        description: 'description',
        required: true
    })
    @Prop({
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    description: string;

    @ApiProperty({
        example: '생후 몇개월',
        description: 'whenInject'
    })
    @IsString()
    @IsNotEmpty()
    whenInject: string;

    readonly readOnlyData: {
        injectionImg: string;
        name: string;
        description: string;
        whenInject: string;
    }
}

export const _InjectionSchema = SchemaFactory.createForClass(Injection)

_InjectionSchema.virtual('readOnlyData').get(function (this: Injection) {
    return {
        injectionImg: this.injectionImg,
        name: this.name,
        description: this.description,
        whenInject: this.whenInject
    }
})

export const InjectionSchema = _InjectionSchema