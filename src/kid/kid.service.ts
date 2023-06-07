import { HttpException, Injectable } from '@nestjs/common';
import { RegistKidDto, UpdateKidDto } from './dto/kid.dtos';
import { CurrentUser } from 'src/common/decorators/user.decorator';
import { Prisma, Kid } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class KidService {
  constructor(private prisma: PrismaService) {}

  async registKid(User) {
    const kid = await this.prisma.kid.create({
      data: {
        parentId: User.id
      },
    });
    return kid;
  }

  async getKids(User) {
    const kids = await this.prisma.kid.findMany({
      where: { parentId: User.id },
      include: { image: true },
    });

    return kids;
  }

  async updateKid(id: string, body: UpdateKidDto, User) {
    await this.prisma.kid.updateMany({
      where: {
        id: Number(id),
        parentId: User.id,
      },
      data: body,
    });

    const kidInfo = await this.prisma.kid.findMany({
      where: {
        id: Number(id),
        parentId: User.id,
      },
      include: { image: true },
    });
    return kidInfo;
  }

  async deleteKid(id: string, User) {
    await this.prisma.kid.deleteMany({
      where: {
        id: Number(id),
        parentId: User.id,
      },
    });

    const kidInfo = await this.prisma.kid.findMany({
      where: {
        id: Number(id),
        parentId: User.id,
      },
      include: { image: true },
    });
    return kidInfo;
  }
}
