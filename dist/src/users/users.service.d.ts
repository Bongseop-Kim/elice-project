import { CreateManagerDto, CreateUserDto, UpdateUserDto } from './dto/users.dtos';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    existByEmail(email: string): Promise<any>;
    clientSignUp(body: CreateUserDto): Promise<string>;
    deleteUser(id: number): Promise<User>;
    getUserInfo(id: number): Promise<(User & {
        favoriteHospitals: import(".prisma/client").Favorite[];
        haveKid: (import(".prisma/client").Kid & {
            image: import(".prisma/client").Image;
        })[];
        reserved: import(".prisma/client").Reservation[];
    })[]>;
    updateUserInfo(id: number, body: UpdateUserDto): Promise<User>;
    managerSignUp(body: CreateManagerDto): Promise<string>;
    findUserByEmail(email: string): Promise<User | null>;
    findUserByIdWithoutPassword(id: number): Promise<User | null>;
}
