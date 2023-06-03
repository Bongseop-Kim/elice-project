import { UsersRepository } from './users.repository';
import { CreateManagerDto, CreateUserDto, UpdateUserDto } from './dto/users.dtos';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepository);
    clientSignUp(body: CreateUserDto): Promise<import(".prisma/client").User>;
    deleteUser(id: number): Promise<import(".prisma/client").User>;
    getUserInfo(id: number): Promise<(import(".prisma/client").User & {
        haveChild: import(".prisma/client").Child[];
    })[]>;
    updateUserInfo(id: number, body: UpdateUserDto): Promise<any>;
    managerSignUp(body: CreateManagerDto): Promise<import(".prisma/client").User>;
    verifyCheck(id: number, User: any): Promise<"type: 1" | "type: 2" | "type: 0">;
}
