import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class FavoriteService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateFavoriteDto, userId: number): import(".prisma/client").Prisma.Prisma__FavoriteClient<import(".prisma/client").Favorite, never>;
    findByUser(userId: number): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Favorite[]>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__FavoriteClient<import(".prisma/client").Favorite, never>;
}
