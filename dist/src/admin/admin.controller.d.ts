import { AuthService } from 'src/auth/auth.service';
import { AdminService } from './admin.service';
import { UserType, Id } from './dto/admin.dtos';
export declare class AdminController {
    private readonly adminService;
    private readonly authService;
    constructor(adminService: AdminService, authService: AuthService);
    getUserInfo(param: UserType, User: any): Promise<import("@nestjs/common").HttpException | {
        name: string;
        email: string;
        phoneNumber: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }[]>;
    adminDeleteUser(param: Id, User: any): Promise<import(".prisma/client").User>;
    adminVerifyManager(param: Id, User: any): Promise<{
        adminVerified: boolean;
        id: number;
    }>;
}
