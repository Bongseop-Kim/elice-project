import { AuthService } from 'src/auth/auth.service';
import { AdminService } from './admin.service';
export declare class AdminController {
    private readonly adminService;
    private readonly authService;
    constructor(adminService: AdminService, authService: AuthService);
    getUserInfo(userType: string, User: any): Promise<import("@nestjs/common").HttpException | import(".prisma/client").User[]>;
    adminDeleteUser(id: number, User: any): Promise<import(".prisma/client").User>;
    adminVerifyManager(id: number, User: any): Promise<import(".prisma/client").User>;
}
