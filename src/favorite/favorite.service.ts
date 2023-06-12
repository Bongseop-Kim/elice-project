import { Injectable } from '@nestjs/common';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FavoriteService {
  constructor(private prisma: PrismaService) {}

  async toggle(body: CreateFavoriteDto, userId: number) {
    const { hospitalId } = body;

    const bookMark = await this.prisma.favorite.findMany({
      where: {
        hospitalId,
        userId,
      },
    });
    if (bookMark.length) {
      return this.prisma.favorite.deleteMany({
        where: {
          hospitalId,
          userId,
        },
      });
    } else {
      return await this.prisma.favorite.create({
        data: {
          hospitalId,
          userId,
        },
      });
    }
  }

  findByUser(userId: number) {
    return this.prisma.favorite.findMany({
      where: { userId },
    });
  }
}
