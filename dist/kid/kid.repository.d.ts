import { Prisma, Kid } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateKidDto } from './dto/kid.dtos';
export declare class KidRepository {
    private prisma;
    constructor(prisma: PrismaService);
    registKid(User: any): Prisma.Prisma__KidClient<Kid, never>;
    getKids(User: any): Prisma.PrismaPromise<(Kid & {
        image: import(".prisma/client").Image;
    })[]>;
    updateKid(id: string, body: UpdateKidDto): Prisma.Prisma__KidClient<Kid, never>;
    deleteKid(id: string): Prisma.Prisma__KidClient<Kid, never>;
}
