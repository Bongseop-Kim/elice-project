import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Document } from 'mongoose';

const options: SchemaOptions = {
    collection: 'user',
}

@Schema(options)
export class User extends Document {
    @ApiProperty({
        example: '노은탁',
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
        example: 'mock@mok.ing',
        description: 'email',
        required: true
    })
    @Prop({
        required: true,
        unique: true
    })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({
        example: '남',
        description: 'gender',
        required: true
    })
    @Prop({
        required: true
    })
    @IsString()
    @IsNotEmpty()
    gender: string;

    @ApiProperty({
        example: '20771225',
        description: 'birthday',
        required: true
    })
    @Prop({
        required: true
    })
    @IsString()
    @IsNotEmpty()
    birth: string;

    @ApiProperty({
        example: '010-0000-0000',
        description: 'phoneNumber',
        required: true
    })
    @Prop({
        required: true
    })
    @IsString()
    @IsNotEmpty()
    phoneNumber: string;

    @ApiProperty({
        example: '부산시 동래구 온천천로',
        description: 'address',
        required: true
    })
    @Prop({
        required: true
    })
    @IsString()
    @IsNotEmpty()
    address: string;

    @ApiProperty({
        example: '123gs23dfsf',
        description: 'reserved / refer: userReservDocument',
        required: true
    })
    @Prop({
        required: true,
        default: []
    })
    reserved: string[];

    @ApiProperty({
        example: '123fd2e3d',
        description: 'haveChild / refer: childDocument',
        required: true
    })
    @Prop({
        required: true,
        default: []
    })
    haveChild: string[];

    @ApiProperty({
        example: '357afsdt42g',
        description: 'userReview / refer: reviewersDocument',
        required: true
    })
    @Prop({
        required: true,
        default: []
    })
    userReview: string[]

    @ApiProperty({
        example: '57xrtu2g46',
        description: 'reservHistory / refer: reservHistoryDocument',
        required: true
    })
    @Prop({
        required: true,
        default: []
    })
    reservHistory: string[]

    @ApiProperty({
        example: '["...hosId"]',
        description: 'favorate / refer: hospitalAPI',
        required: true
    })
    @Prop({
        required: true,
        default: []
    })
    favorate: string[]

    @ApiProperty({
        example: '["...hosId"]',
        description: 'like / refer: hospitalAPI',
        required: true
    })
    @Prop({
        required: true,
        default: []
    })
    like: string[]

    readonly readOnlyData: {
        key: string;
        id: string;
        name: string;
        email: string;
        gender: string;
        birth: string;
        phoneNumber: string;
        address: string;
        reserved: string[];
        haveChild: string[];
        userReview: string[];
        reservHistory: string[];
        favorate: string[];
        like: string[];
    }
}

export const _UserSchema = SchemaFactory.createForClass(User);

_UserSchema.virtual('readOnlyData').get(function (this: User) {
    return {
        name: this.name,
        email: this.email,
        gender: this.gender,
        birth: this.birth,
        phoneNumber: this.phoneNumber,
        address: this.address,
        reserved: this.reserved,
        haveChild: this.haveChild,
        userReview: this.userReview,
        reservHistory: this.reservHistory,
        favorate: this.favorate,
        like: this.like
    }
})

export const UserSchema = _UserSchema