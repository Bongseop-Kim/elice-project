import { KidRepository } from './kid.repository';
import { UpdateKidDto } from './dto/kid.dtos';
export declare class KidService {
    private readonly kidRepository;
    constructor(kidRepository: KidRepository);
    registKid(User: any): Promise<import(".prisma/client").Kid>;
    getKids(User: any): Promise<(import(".prisma/client").Kid & {
        image: import(".prisma/client").Image;
    })[]>;
    updateKid(id: string, body: UpdateKidDto): Promise<import(".prisma/client").Kid>;
    deleteKid(id: string): Promise<import(".prisma/client").Kid>;
}
