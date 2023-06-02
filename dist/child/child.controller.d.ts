import { ChildService } from './child.service';
import { RegistChildDto, UpdateChildDto } from './dto/child.dtos';
export declare class ChildController {
    private readonly childService;
    constructor(childService: ChildService);
    registChild(body: RegistChildDto, User: any): Promise<any>;
    updateChild(id: number, body: UpdateChildDto, User: any): Promise<import(".prisma/client").Child>;
    deleteChild(id: number, User: any): Promise<import(".prisma/client").Child>;
}
