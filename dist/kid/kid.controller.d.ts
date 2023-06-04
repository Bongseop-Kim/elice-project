import { KidService } from './kid.service';
import { RegistKidDto, UpdateKidDto } from './dto/kid.dtos';
export declare class KidController {
    private readonly kidService;
    constructor(kidService: KidService);
    registKid(body: RegistKidDto, User: any): Promise<any>;
    getKids(User: any): Promise<(import(".prisma/client").Kid & {
        image: import(".prisma/client").Image;
    })[]>;
    updateKid(id: string, body: UpdateKidDto, User: any): Promise<import(".prisma/client").Kid>;
    deleteKid(id: string, User: any): Promise<import(".prisma/client").Kid>;
}
