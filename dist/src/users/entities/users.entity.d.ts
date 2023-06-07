import { User } from '@prisma/client';
export declare class UserEntity implements User {
    id: number;
    name: string;
    email: string;
    emailVerified: Date;
    password: string;
    phoneNumber: string;
    role: string;
    createdAt: Date;
    updatedAt: Date;
    hospitalId: string;
    adminVerified: boolean;
    address: string;
}
