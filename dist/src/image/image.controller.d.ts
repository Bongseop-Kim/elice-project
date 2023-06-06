import { ImageService } from './image.service';
import { UpdateImageDto } from './dto/update-image.dto';
import { CreateImageDto } from './dto/create-image.dto';
export declare class ImageController {
    private readonly imageService;
    constructor(imageService: ImageService);
    create(body: CreateImageDto): import(".prisma/client").Prisma.Prisma__ImageClient<import(".prisma/client").Image, never>;
    findByHospitalId(id: string): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Image[]>;
    findByChildId(id: string): void;
    update(id: string, body: UpdateImageDto): import(".prisma/client").Prisma.Prisma__ImageClient<import(".prisma/client").Image, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ImageClient<import(".prisma/client").Image, never>;
}
