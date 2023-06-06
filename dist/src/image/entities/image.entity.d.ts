import { Image } from '@prisma/client';
export declare class ImageEntity implements Image {
    id: number;
    imageUrl: string;
    kidId: number | undefined;
    hospitalId: string | undefined;
}
