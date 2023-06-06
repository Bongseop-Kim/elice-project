import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { RequestLoginDto } from './dto/request.login.dto';
export declare class AuthService {
    private readonly usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    jwtLogIn(data: RequestLoginDto): Promise<{
        token: string;
        role: string;
    }>;
}
