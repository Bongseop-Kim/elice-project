import { KidService } from './kid.service';
import { UpdateKidDto } from './dto/kid.dtos';
export declare class KidController {
    private readonly kidService;
    constructor(kidService: KidService);
    registKid(User: any): Promise<import(".prisma/client").Kid>;
    getKids(User: any): Promise<(import(".prisma/client").Kid & {
        image: import(".prisma/client").Image;
    })[]>;
    updateKid(id: string, body: UpdateKidDto, User: any): Promise<(import(".prisma/client").Kid & {
        image: import(".prisma/client").Image;
    })[]>;
    deleteKid(id: string, User: any): Promise<(import(".prisma/client").Kid & {
        image: import(".prisma/client").Image;
    })[]>;
}
