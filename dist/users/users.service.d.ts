import { UsersRepository } from './users.repository';
import { CreateManagerDto, CreateUserDto, UpdateUserDto } from './dto/users.dtos';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepository);
    clientSignUp(body: CreateUserDto): Promise<string>;
    deleteUser(id: number): Promise<import(".prisma/client").User>;
    getUserInfo(id: number): Promise<(import(".prisma/client").User & {
        favoriteHospitals: import(".prisma/client").Favorite[];
        haveKid: (import(".prisma/client").Kid & {
            image: import(".prisma/client").Image;
        })[];
        reserved: import(".prisma/client").Reservation[];
    })[]>;
    updateUserInfo(id: number, body: UpdateUserDto): Promise<import(".prisma/client").User>;
    managerSignUp(body: CreateManagerDto): Promise<string>;
}
