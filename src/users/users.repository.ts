import { HttpException, Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from './dto/users.dtos'

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
  
  signUp(data: Prisma.UserCreateInput): Promise<User> {
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

  findUserByIdWithoutPassword(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
  }

  deleteUser(id: string) {
    return this.prisma.user.delete({
      where: { id },
    });
  }

  getUserInfo(id: string) {
    return this.prisma.user.findUnique({
      where: { id: id },
      include: { haveChild: true }
    })
  }

  updateUserInfo(id: string, body: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id: id },
      data: body
    })
  }
}
