import { JwtService } from '@nestjs/jwt';
import { UsersRepository } from 'src/users/users.repository';
import { RequestLoginDto } from './dto/request.login.dto';
export declare class AuthService {
    private readonly usersRepository;
    private jwtService;
    constructor(usersRepository: UsersRepository, jwtService: JwtService);
    jwtLogIn(data: RequestLoginDto): Promise<{
        token: string;
        id: number;
    }>;
}
