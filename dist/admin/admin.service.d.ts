import { HttpException } from '@nestjs/common';
import { AdminRepository } from './admin.repository';
import { UserType, Id } from './dto/admin.dtos';
export declare class AdminService {
    private readonly adminRepository;
    constructor(adminRepository: AdminRepository);
    isAdmin(User: any): boolean;
    getAllUserInfo(param: UserType, User: any): Promise<HttpException | import(".prisma/client").User[]>;
    adminDeleteUser(param: Id, User: any): Promise<import(".prisma/client").User>;
    adminVerifyManager(param: Id, User: any): Promise<import(".prisma/client").User>;
}
