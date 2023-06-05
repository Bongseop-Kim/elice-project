import { AuthService } from 'src/auth/auth.service';
import { AdminService } from './admin.service';
import { UserType, Id } from './dto/admin.dtos';
export declare class AdminController {
    private readonly adminService;
    private readonly authService;
    constructor(adminService: AdminService, authService: AuthService);
    getUserInfo(param: UserType, User: any): Promise<import("@nestjs/common").HttpException | import(".prisma/client").User[]>;
    adminDeleteUser(param: Id, User: any): Promise<import(".prisma/client").User>;
    adminVerifyManager(param: Id, User: any): Promise<import(".prisma/client").User>;
}
