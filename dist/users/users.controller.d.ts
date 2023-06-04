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
    getUserInfo(User: any): Promise<(import(".prisma/client").User & {
        favoriteHospitals: import(".prisma/client").Favorate[];
        haveKid: (import(".prisma/client").Kid & {
            image: import(".prisma/client").Image;
        })[];
        reserved: import(".prisma/client").Reservation[];
        alarm: import(".prisma/client").Alarm[];
    })[]>;
    updateUserInfo(body: UpdateUserDto, User: any): Promise<import(".prisma/client").User>;
    managerSignUp(body: CreateManagerDto): Promise<string>;
}
