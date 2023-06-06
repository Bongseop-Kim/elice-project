import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ImageService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateImageDto): import(".prisma/client").Prisma.Prisma__ImageClient<import(".prisma/client").Image, never>;
    findByHospitalId(id: string): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Image[]>;
    update(id: number, data: UpdateImageDto): import(".prisma/client").Prisma.Prisma__ImageClient<import(".prisma/client").Image, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__ImageClient<import(".prisma/client").Image, never>;
}
