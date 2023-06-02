import { HttpException } from '@nestjs/common';
import { AdminRepository } from './admin.repository';
export declare class AdminService {
    private readonly adminRepository;
    constructor(adminRepository: AdminRepository);
    getAllUserInfo(userType: string, User: any): Promise<HttpException | import(".prisma/client").User[]>;
    adminDeleteUser(id: number, User: any): Promise<import(".prisma/client").User>;
    adminVerifyManager(id: number, User: any): Promise<import(".prisma/client").User>;
}
