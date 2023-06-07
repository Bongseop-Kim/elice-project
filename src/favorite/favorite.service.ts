import { Injectable } from '@nestjs/common';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FavoriteService {
  constructor(private prisma: PrismaService) {}

  create(hospitalId: string, userId: number) {
    return this.prisma.favorite.create({
      data: {
        hospitalId,
        userId,
      },
    });
  }

  findByUser(userId: number) {
    return this.prisma.favorite.findMany({
      where: { userId },
    });
  }

  remove(id: number) {
    return this.prisma.favorite.delete({
      where: { id },
    });
  }
}
