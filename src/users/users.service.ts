import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async signUp(body: CreateUserDto) {
    const { email, name, password, phoneNumber } = body;
    const isUserExist = await this.usersRepository.existByEmail(email);

    if (isUserExist) {
      throw new UnauthorizedException('해당하는 이메일은 이미 존재합니다.');
    }

    const hashedPassedword = await bcrypt.hash(password, 10);

    const user = await this.usersRepository.create({
      email,
      name,
      phoneNumber,
      password: hashedPassedword
    });
    return user;
  }

  async deleteUser(id: string) {
    return await this.usersRepository.deleteUser(id);
  }
}
