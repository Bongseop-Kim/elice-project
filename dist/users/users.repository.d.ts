import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateManagerDto, UpdateUserDto } from './dto/users.dtos';
export declare class UsersRepository {
    private prisma;
    constructor(prisma: PrismaService);
    existByEmail(email: string): Promise<any>;
    clientSignUp(data: Prisma.UserCreateInput): Promise<User>;
    findUserByEmail(email: string): Promise<User | null>;
    findUserByIdWithoutPassword(id: number): Promise<User | null>;
    deleteUser(id: number): Prisma.Prisma__UserClient<User, never>;
    getUserInfo(id: number): Prisma.PrismaPromise<(User & {
        haveChild: import(".prisma/client").Child[];
    })[]>;
    updateUserInfo(id: number, body: UpdateUserDto): Prisma.Prisma__UserClient<User, never>;
    managerSignUp(body: CreateManagerDto): Prisma.Prisma__UserClient<User, never>;
}
