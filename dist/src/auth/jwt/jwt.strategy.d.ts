import { UsersService } from 'src/users/users.service';
import { Payload } from './jwt.payload';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly usersService;
    constructor(usersService: UsersService);
    validate(payload: Payload): Promise<import(".prisma/client").User>;
}
export {};
