import { HttpException, Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateManagerDto, UpdateUserDto } from './dto/users.dtos';

@Injectable()
export class UsersRepository {
  constructor(private prisma: PrismaService) {}

  async existByEmail(email: string): Promise<any> {
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          email: email,
        },
      });
      return user;
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  clientSignUp(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  findUserByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });
  }

  findUserByIdWithoutPassword(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
  }

  deleteUser(id: number) {
    return this.prisma.user.delete({
      where: { id },
    });
  }

  getUserInfo(id: number) {
    return this.prisma.user.findMany({
      where: { id: id },
      include: { haveChild: true },
    });
  }

  updateUserInfo(id: number, body: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id: id },
      data: body,
    });
  }

  managerSignUp(body: CreateManagerDto) {
    const { hospitalId, ...rest } = body;
    return this.prisma.user.create({
      data: {
        ...rest,
        hospital: {
          connect: {
            id: hospitalId,
          },
        },
      },
    });
  }
}
