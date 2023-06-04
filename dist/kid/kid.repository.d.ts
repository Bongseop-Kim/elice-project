import { Prisma, Kid } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegistKidDto, UpdateKidDto } from './dto/kid.dtos';
export declare class KidRepository {
    private prisma;
    constructor(prisma: PrismaService);
    existByParent(User: any): Promise<any>;
    registKid(body: RegistKidDto): Promise<any>;
    getKids(User: any): Prisma.PrismaPromise<(Kid & {
        image: import(".prisma/client").Image;
    })[]>;
    updateKid(id: string, body: UpdateKidDto): Prisma.Prisma__KidClient<Kid, never>;
    deleteKid(id: string): Prisma.Prisma__KidClient<Kid, never>;
}
