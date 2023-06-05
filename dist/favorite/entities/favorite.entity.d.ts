import { Favorite } from '@prisma/client';
export declare class FavoriteEntity implements Favorite {
    id: number;
    userId: number;
    hospitalId: string;
}
