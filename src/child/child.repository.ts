import { HttpException, Injectable } from '@nestjs/common';
import { Prisma, Child } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegistChildDto, UpdateChildDto } from './dto/child.dtos';
import { CurrentUser } from 'src/common/decorators/user.decorator';

@Injectable()
export class ChildRepository {
  constructor(private prisma: PrismaService) {}

  async existByParent(@CurrentUser() User): Promise<any> {
    try {
      const childs = await this.prisma.child.findMany({
        where: {
          parentId: User.id,
        },
      });
      return childs;
    } catch (error) {
      throw new HttpException('db error', 400);
    }
  }

  registChild(body: RegistChildDto): Promise<any> {
    const { parentId, ...rest } = body;
    const child = this.prisma.child.create({
      data: {
        ...rest,
        parent: {
          connect: {
            id: parentId,
          },
        },
      },
    });
    return child;
  }

  updateChild(id: number, body: UpdateChildDto) {
    return this.prisma.child.update({
      where: { id: Number(id) },
      data: body,
    });
  }

  deleteChild(id: number) {
    return this.prisma.child.delete({
      where: { id: Number(id) },
    });
  }
}
