import {
  Injectable,
  UnauthorizedException,
  HttpException,
} from '@nestjs/common';
import { UsersRepository } from './users.repository';
import * as bcrypt from 'bcrypt';
import {
  CreateManagerDto,
  CreateUserDto,
  UpdateUserDto,
} from './dto/users.dtos';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  //유저 회원 가입 API 입니다.
  async clientSignUp(body: CreateUserDto) {
    const { email, name, password, phoneNumber } = body;
    const isUserExist = await this.usersRepository.existByEmail(email);

    //이메일 중복 검사
    if (isUserExist) {
      throw new UnauthorizedException('해당하는 이메일은 이미 존재합니다.');
    }

    const hashedPassedword = await bcrypt.hash(password, 10);

    const user = await this.usersRepository.clientSignUp({
      email,
      name,
      phoneNumber,
      password: hashedPassedword,
      role: 'client',
      address: null,
    });
    return user.email;
  }

  //회원 탈퇴 API 입니다.
  async deleteUser(id: number) {
    return await this.usersRepository.deleteUser(id);
  }

  //유저 상세 조회 API입니다.
  async getUserInfo(id: number) {
    const user = await this.usersRepository.getUserInfo(id);
    return user;
  }

  //유저 정보 수정 API입니다.
  async updateUserInfo(id: number, body: UpdateUserDto) {
      if (body.email) {
        throw new HttpException('이메일은 변경할 수 없습니다.', 400);
      }

      if (body.password) {
        const hashedPassedword = await bcrypt.hash(body.password, 10);
        body.password = hashedPassedword;
      }

      const user = await this.usersRepository.updateUserInfo(id, body);
      return user;
  }

  //유저 회원 가입 API 입니다.
  async managerSignUp(body: CreateManagerDto) {
    const { email, name, phoneNumber } = body;
    const hospitalId = body.hospitalId;
    const password = body.password;

    const isUserExist = await this.usersRepository.existByEmail(email);

    //이메일 중복 검사
    if (isUserExist) {
      throw new UnauthorizedException('해당하는 이메일은 이미 존재합니다.');
    }

    const hashedPassedword = await bcrypt.hash(password, 10);

    const user = {
      ...body,
      password: hashedPassedword,
      hospitalId: body.hospitalId,
      role: 'manager',
      adminVerified: false,
    };

    const signUp = await this.usersRepository.managerSignUp(user);

    return signUp.email;
  }

}
