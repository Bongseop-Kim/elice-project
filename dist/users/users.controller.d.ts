import { UsersService } from './users.service';
import { AuthService } from 'src/auth/auth.service';
import { CreateManagerDto, CreateUserDto, UpdateUserDto } from './dto/users.dtos';
import { RequestLoginDto } from 'src/auth/dto/request.login.dto';
export declare class UsersController {
    private readonly usersService;
    private readonly authService;
    constructor(usersService: UsersService, authService: AuthService);
    getCurrentUser(User: any): any;
    clientSignUp(body: CreateUserDto): Promise<import(".prisma/client").User>;
    deleteUser(user: any): Promise<import(".prisma/client").User>;
    logIn(data: RequestLoginDto): Promise<{
        token: string;
    }>;
    getUserInfo(User: any): Promise<(import(".prisma/client").User & {
        haveChild: import(".prisma/client").Child[];
    })[]>;
    updateUserInfo(body: UpdateUserDto, User: any): Promise<any>;
    managerSignUp(body: CreateManagerDto): Promise<import(".prisma/client").User>;
    verifyCheck(id: number, User: any): Promise<"type: 1" | "type: 2" | "type: 0">;
}
