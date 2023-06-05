import { Injectable } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ImageService {
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

  update(id: number, data: UpdateImageDto) {
    return this.prisma.image.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.image.delete({
      where: { id },
    });
  }
}
