import {
  Injectable,
  UnauthorizedException,
  HttpException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import {
  CreateManagerDto,
  CreateUserDto,
  UpdateUserDto,
} from './dto/users.dtos';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  //이메일 중복 검사
  async existByEmail(email: string): Promise<any> {
    const user = await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (user) {
      throw new UnauthorizedException('해당하는 이메일은 이미 존재합니다.');
    }
    return user;
  }

  //유저 회원 가입 API 입니다.
  async clientSignUp(body: CreateUserDto) {
    const { email, name, password, phoneNumber } = body;
    await this.existByEmail(email);

    const hashedPassedword = await bcrypt.hash(password, 10);

    const user = {
      email: email,
      name: name,
      phoneNumber: phoneNumber,
      password: hashedPassedword,
      role: 'client',
      address: null,
    };

    const signUp = await this.prisma.user.create({
      data: {
        ...user,
      },
    });
    return signUp.email;
  }

  //회원 탈퇴 API 입니다.
  async deleteUser(id: number) {
    return await this.prisma.user.delete({
      where: { id },
    });
  }

  //유저 상세 조회 API입니다.
  async getUserInfo(id: number) {
    const user = await this.prisma.user.findMany({
      where: { id: id },
      select: {
        id: true,
        name: true,
        email: true,
        phoneNumber: true,
        address: true,
        createdAt: true,
        favoriteHospitals: true,
        reserved: true,
        updatedAt: true
      }
    });
    return user;
  }

  //유저 정보 수정 API입니다.
  async updateUserInfo(id: number, body: UpdateUserDto) {
    if (body.email) {
      throw new HttpException('이메일은 변경할 수 없습니다.', 400);
    }

    if (body.role) {
      throw new UnauthorizedException('권한은 임의로 변경할 수 없습니다.');
    }

    if (body.password) {
      const hashedPassedword = await bcrypt.hash(body.password, 10);
      body.password = hashedPassedword;
    }

      await this.prisma.user.update({
        where: { id: id },
        data: body,
      });

      const user = await this.prisma.user.findUnique({
        where: { id },
        select: {
          id: true,
          name: true,
          email: true,
          phoneNumber: true,
          address: true,
          updatedAt: true
        }
      })
      return user;
  }

  //병원 유저 회원 가입 API 입니다.
  async managerSignUp(body: CreateManagerDto) {
    const { email, name, password, phoneNumber, hospitalId } = body;
    await this.existByEmail(email);

    const hashedPassedword = await bcrypt.hash(password, 10);

    const user = {
      email,
      name,
      password: hashedPassedword,
      phoneNumber,
      role: 'manager',
      adminVerified: false,
    };

    const hospitalDuplicateCheck = await this.prisma.user.findUnique({
      where: {
        hospitalId: hospitalId,
      },
    });

    if (hospitalDuplicateCheck) {
      throw new UnauthorizedException(
        '해당 병원은 이미 등록된 관리자가 존재합니다.',
      );
    }

    const signUp = await this.prisma.user.create({
      data: {
        ...user,
        hospital: {
          connect: {
            id: hospitalId,
          },
        },
      },
    });
    return signUp.email;
  }

  //auth에서 사용되는 API입니다.
  findUserByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });
  }

  //auth에서 사용되는 API입니다.
  findUserByIdWithoutPassword(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
  }
}
