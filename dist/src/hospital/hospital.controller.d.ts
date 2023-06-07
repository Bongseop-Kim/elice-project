import { HospitalService } from './hospital.service';
import { PutHospitalDto } from './dto/put-hospital.dto';
export declare class HospitalController {
    private readonly hospitalService;
    constructor(hospitalService: HospitalService);
    findAll(depth1: string, depth2: string, size: string, page: string, sort: string): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Hospital[]>;
    findById(id: string): import(".prisma/client").Prisma.Prisma__HospitalClient<import(".prisma/client").Hospital & {
        image: import(".prisma/client").Image[];
    }, never>;
    update(id: string, data: PutHospitalDto): import(".prisma/client").Prisma.Prisma__HospitalClient<import(".prisma/client").Hospital, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__HospitalClient<import(".prisma/client").Hospital, never>;
}
