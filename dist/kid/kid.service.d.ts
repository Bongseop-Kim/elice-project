import { KidRepository } from './kid.repository';
import { RegistKidDto, UpdateKidDto } from './dto/kid.dtos';
export declare class KidService {
    private readonly kidRepository;
    constructor(kidRepository: KidRepository);
    registKid(body: RegistKidDto, User: any): Promise<any>;
    getKids(User: any): Promise<(import(".prisma/client").Kid & {
        image: import(".prisma/client").Image;
    })[]>;
    updateKid(id: string, body: UpdateKidDto): Promise<import(".prisma/client").Kid>;
    deleteKid(id: string): Promise<import(".prisma/client").Kid>;
}
