/// <reference types="node" />
import { UpdateImageDto } from './dto/update-image.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ImageService {
    private prisma;
    constructor(prisma: PrismaService);
    private readonly s3Client;
    upload(fileName: string, file: Buffer, hospitalId: string, kidId: number): Promise<import(".prisma/client").Image>;
    findByHospitalId(id: string): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Image[]>;
    findByKidId(id: number): import(".prisma/client").Prisma.Prisma__ImageClient<import(".prisma/client").Image, never>;
    update(id: number, data: UpdateImageDto): import(".prisma/client").Prisma.Prisma__ImageClient<import(".prisma/client").Image, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__ImageClient<import(".prisma/client").Image, never>;
}
