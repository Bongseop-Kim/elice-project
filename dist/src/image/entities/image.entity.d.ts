import { Image } from '@prisma/client';
export declare class ImageEntity implements Image {
    id: number;
    type: string;
    imageUrl: string;
    kidId: number;
    hospitalId: string;
}
