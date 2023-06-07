/// <reference types="multer" />
import { ImageService } from './image.service';
import { UpdateImageDto } from './dto/update-image.dto';
import { InputImageDto } from './dto/input-image.dto';
export declare class ImageController {
    private readonly imageService;
    constructor(imageService: ImageService);
    upload(file: Express.Multer.File, data: InputImageDto): Promise<import(".prisma/client").Image>;
    findByHospitalId(id: string): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Image[]>;
    findByKidId(id: string): import(".prisma/client").Prisma.Prisma__ImageClient<import(".prisma/client").Image, never>;
    update(id: string, body: UpdateImageDto): import(".prisma/client").Prisma.Prisma__ImageClient<import(".prisma/client").Image, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ImageClient<import(".prisma/client").Image, never>;
}
