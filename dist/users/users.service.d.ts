import { UsersRepository } from './users.repository';
import { CreateManagerDto, CreateUserDto, UpdateUserDto } from './dto/users.dtos';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepository);
    clientSignUp(body: CreateUserDto): Promise<string>;
    deleteUser(id: number): Promise<import(".prisma/client").User>;
    getUserInfo(id: number): Promise<(import(".prisma/client").User & {
        haveKid: import(".prisma/client").Kid[];
    })[]>;
    updateUserInfo(id: number, body: UpdateUserDto): Promise<import(".prisma/client").User>;
    managerSignUp(body: CreateManagerDto): Promise<string>;
}
