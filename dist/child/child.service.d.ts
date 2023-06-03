import { ChildRepository } from './child.repository';
import { RegistChildDto, UpdateChildDto } from './dto/child.dtos';
export declare class ChildService {
    private readonly childRepository;
    constructor(childRepository: ChildRepository);
    registChild(body: RegistChildDto, User: any): Promise<any>;
    updateChild(id: number, body: UpdateChildDto): Promise<import(".prisma/client").Child>;
    deleteChild(id: number): Promise<import(".prisma/client").Child>;
}
