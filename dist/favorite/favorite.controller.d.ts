import { FavoriteService } from './favorite.service';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
export declare class FavoriteController {
    private readonly favoriteService;
    constructor(favoriteService: FavoriteService);
    create(data: CreateFavoriteDto, user: any): import(".prisma/client").Prisma.Prisma__FavoriteClient<import(".prisma/client").Favorite, never>;
    findByUser(user: any): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Favorite[]>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__FavoriteClient<import(".prisma/client").Favorite, never>;
}
