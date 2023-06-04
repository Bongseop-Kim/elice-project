import { KidService } from './kid.service';
import { RegistKidDto, UpdateKidDto } from './dto/kid.dtos';
export declare class KidController {
    private readonly kidService;
    constructor(kidService: KidService);
    registKid(body: RegistKidDto, User: any): Promise<any>;
    updateKid(id: number, body: UpdateKidDto, User: any): Promise<import(".prisma/client").Kid>;
    deleteKid(id: number, User: any): Promise<import(".prisma/client").Kid>;
}
