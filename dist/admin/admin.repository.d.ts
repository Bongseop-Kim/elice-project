import { HttpException } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserType, Id } from './dto/admin.dtos';
export declare class AdminRepository {
    private prisma;
    constructor(prisma: PrismaService);
    getAllUserInfo(param: UserType): Promise<HttpException | User[]>;
    adminDeleteUser(param: Id): Promise<User>;
    adminVerifyManager(param: Id): Promise<User>;
}
