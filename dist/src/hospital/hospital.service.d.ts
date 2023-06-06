import { PutHospitalDto } from './dto/put-hospital.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class HospitalService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(depth1: string, depth2: string, size: number, page: number, sort: string): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Hospital[]>;
    findById(id: string): import(".prisma/client").Prisma.Prisma__HospitalClient<import(".prisma/client").Hospital & {
        images: import(".prisma/client").Image[];
    }, never>;
    put(id: string, data: PutHospitalDto): import(".prisma/client").Prisma.Prisma__HospitalClient<import(".prisma/client").Hospital, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__HospitalClient<import(".prisma/client").Hospital, never>;
}
