import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Document } from 'mongoose';

const options: SchemaOptions = {
    collection: 'child',
}

@Schema(options)
export class Child extends Document {
    @ApiProperty({
        example: '노화연',
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
        example: '여',
        description: 'gender',
        required: true
    })
    @Prop({
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    gender: string;

    @ApiProperty({
        example: '21000101',
        description: 'birth',
        required: true
    })
    @Prop({
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    birth: string;

    @ApiProperty({
        example: '123gs23dfsf',
        description: 'parent / refer: userDocument',
        required: true
    })
    @Prop({
        required: true
    })
    parent: string;

    @ApiProperty({
        example: '홍역예방주사',
        description: 'injected / refer: injectedInfoDocument',
        required: true
    })
    @Prop({
        required: true,
        default: []
    })
    injected: string[];

    readonly readOnlyData: {
        key: string;
        id: string;
        gender: string;
        birth: string;
        parent: string;
        injected: string[];
    }
}

export const _ChildSchema = SchemaFactory.createForClass(Child);

_ChildSchema.virtual('readOnlyData').get(function (this: Child) {
    return {
        name: this.name,
        gender: this.gender,
        birth: this.birth,
        parent: this.parent,
        injected: this.injected
    }
})

export const ChildSchema = _ChildSchema