import { FavorateService } from './favorate.service';
import { AuthService } from 'src/auth/auth.service';
export declare class FavorateController {
    private readonly favorateService;
    private readonly authService;
    constructor(favorateService: FavorateService, authService: AuthService);
    newFavorate(id: number, User: any): Promise<void>;
}
