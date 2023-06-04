import { HttpException, Injectable } from '@nestjs/common';
import { Prisma, Kid } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegistKidDto, UpdateKidDto } from './dto/kid.dtos';
import { CurrentUser } from 'src/common/decorators/user.decorator';

@Injectable()
export class KidRepository {
  constructor(private prisma: PrismaService) {}

  async existByParent(@CurrentUser() User): Promise<any> {
    try {
      const kids = await this.prisma.kid.findMany({
        where: {
          parentId: User.id,
        },
      });
      return kids;
    } catch (error) {
      throw new HttpException('db error', 400);
    }
  }

  registKid(body: RegistKidDto): Promise<any> {
    const { parentId, ...rest } = body;
    const kid = this.prisma.kid.create({
      data: {
        ...rest,
        parent: {
          connect: {
            id: parentId,
          },
        },
      },
    });
    return kid;
  }

  updateKid(id: number, body: UpdateKidDto) {
    return this.prisma.kid.update({
      where: { id: Number(id) },
      data: body,
    });
  }

  deleteKid(id: number) {
    return this.prisma.kid.delete({
      where: { id: Number(id) },
    });
  }
}
