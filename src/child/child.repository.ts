import { HttpException, Injectable } from '@nestjs/common';
import { Prisma, Child } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegistChildDto } from './dto/regist-child.dto';
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

    async regist(body: RegistChildDto):Promise<Child> {
      const { parentId, ...rest} = body;
      const child = await this.prisma.child.create({
        data:{
          ...rest,
          parent: {
            connect: {
              id: parentId,
            },
          },
        },
      })
      return child;
    }
}