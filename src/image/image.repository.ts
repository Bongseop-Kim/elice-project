import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';

@Injectable()
export class ImageRepository {
  constructor(private prisma: PrismaService) {}

  create(data: CreateImageDto) {
    return this.prisma.image.create({
      data,
    });
  }

  findByHospitalId(id: string) {
    return this.prisma.image.findMany({
      where: {
        hospitalId: id,
      },
    });
  }

  updateImage(id: number, data: UpdateImageDto) {
    return this.prisma.image.update({
      where: { id },
      data,
    });
  }

  deleteImage(id: number) {
    return this.prisma.image.delete({
      where: { id },
    });
  }
}
