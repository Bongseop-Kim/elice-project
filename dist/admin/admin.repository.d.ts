import { HttpException } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class AdminRepository {
    private prisma;
    constructor(prisma: PrismaService);
    getAllUserInfo(userType: string): Promise<HttpException | User[]>;
    adminDeleteUser(id: number): Promise<User>;
    adminVerifyManager(id: number): Promise<User>;
}
