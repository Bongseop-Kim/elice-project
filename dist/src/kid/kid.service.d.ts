import { UpdateKidDto } from './dto/kid.dtos';
import { Kid } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class KidService {
    private prisma;
    constructor(prisma: PrismaService);
    registKid(User: any): Promise<Kid>;
    getKids(User: any): Promise<(Kid & {
        image: import(".prisma/client").Image;
    })[]>;
    updateKid(id: string, body: UpdateKidDto, User: any): Promise<(Kid & {
        image: import(".prisma/client").Image;
    })[]>;
    deleteKid(id: string, User: any): Promise<(Kid & {
        image: import(".prisma/client").Image;
    })[]>;
}
