import { KidRepository } from './kid.repository';
import { RegistKidDto, UpdateKidDto } from './dto/kid.dtos';
export declare class KidService {
    private readonly kidRepository;
    constructor(kidRepository: KidRepository);
    registKid(body: RegistKidDto, User: any): Promise<any>;
    updateKid(id: number, body: UpdateKidDto): Promise<import(".prisma/client").Kid>;
    deleteKid(id: number): Promise<import(".prisma/client").Kid>;
}
