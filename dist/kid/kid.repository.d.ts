import { Prisma, Kid } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegistKidDto, UpdateKidDto } from './dto/kid.dtos';
export declare class KidRepository {
    private prisma;
    constructor(prisma: PrismaService);
    existByParent(User: any): Promise<any>;
    registKid(body: RegistKidDto): Promise<any>;
    updateKid(id: number, body: UpdateKidDto): Prisma.Prisma__KidClient<Kid, never>;
    deleteKid(id: number): Prisma.Prisma__KidClient<Kid, never>;
}
