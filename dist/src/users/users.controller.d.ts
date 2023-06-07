import { UsersService } from './users.service';
import { AuthService } from 'src/auth/auth.service';
import { CreateManagerDto, CreateUserDto, UpdateUserDto } from './dto/users.dtos';
import { RequestLoginDto } from 'src/auth/dto/request.login.dto';
export declare class UsersController {
    private readonly usersService;
    private readonly authService;
    constructor(usersService: UsersService, authService: AuthService);
    getCurrentUser(User: any): any;
    clientSignUp(body: CreateUserDto): Promise<string>;
    deleteUser(User: any): Promise<import(".prisma/client").User>;
    logIn(data: RequestLoginDto): Promise<{
        token: string;
        role: string;
    }>;
    getUserInfo(User: any): Promise<{
        name: string;
        email: string;
        phoneNumber: string;
        address: string;
        createdAt: Date;
        updatedAt: Date;
        favoriteHospitals: import(".prisma/client").Favorite[];
        reserved: import(".prisma/client").Reservation[];
        id: number;
    }[]>;
    updateUserInfo(body: UpdateUserDto, User: any): Promise<{
        name: string;
        email: string;
        phoneNumber: string;
        address: string;
        updatedAt: Date;
        id: number;
    }>;
    managerSignUp(body: CreateManagerDto): Promise<string>;
}
