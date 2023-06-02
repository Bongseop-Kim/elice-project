import { Prisma, Child } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegistChildDto, UpdateChildDto } from './dto/child.dtos';
export declare class ChildRepository {
    private prisma;
    constructor(prisma: PrismaService);
    existByParent(User: any): Promise<any>;
    registChild(body: RegistChildDto): Promise<any>;
    updateChild(id: number, body: UpdateChildDto): Prisma.Prisma__ChildClient<Child, never>;
    deleteChild(id: number): Prisma.Prisma__ChildClient<Child, never>;
}
