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
    return user;
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
    try {
      if (body.email) {
        throw new HttpException(console.error, 400);
      }

      if (body.password) {
        const hashedPassedword = await bcrypt.hash(body.password, 10);
        body.password = hashedPassedword;
      }

      const user = await this.usersRepository.updateUserInfo(id, body);

      return user;
    } catch (error) {
      //에러 처리는 미들웨어가 완성되면 거기에 맞출 계획입니다.
      return error.message;
    }
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
      adminVerified: 'no',
    };

    const signUp = await this.usersRepository.managerSignUp(user);

    return signUp;
  }

  async verifyCheck(id: number, User) {
    /*이 부분은 구현 방법을 잘 모르겠습니다.
    원래 의도하는 바는 다음과 같습니다.
    
    토큰을 받아와 그 토큰 안에 있는 유저의 id와 prameter로 넘어오는 id 값이
    일치하는지 확인 여부와,

    토큰 안에 있는 role 값과 유저의 정보가 DB에 있는 role 값과 일치하는지
    확인 여부와,

    마지막으로 그 롤 값에 해당하는 임의의 메시지를 응답하여
    프론트 쪽에서 유저의 타입을 확인하고
    메인 페이지를 띄우는 방향을 의도하고 있었습니다.

    현재는 토큰에 role 값을 빼고 임의의 타입을 응답해주고
    관리자 API에서 DB 속 관리자의 롤 값을 확인하는 방식으로 일반 유저의 접근을
    막는 것을 고려하고 있습니다.
    */

    const modifyId = Object.values(id);
    /*구현 중에 이해 할 수 없는 부분이 발생했는데,
    @Param() id:number를 이용해 id를 받아왔는데
    console.log('id', id) // 결과값이 왜 id { id : 'id값' } 으로 출력되는지 모르겠습니다.*/

    //id 값이 토큰 값과 일치하는지 확인
    if (Number(modifyId) !== User.id) {
      throw new UnauthorizedException(
        '요청 받은 id값과 현재 유저의 id가 일치하지 않습니다.',
      );
    }

    //role 값을 확인하여 프론트에 메인화면 타입을 건네어 줌
    if (User.role === 'client') {
      return 'type: 1';
    } else if (User.role === 'manager') {
      return 'type: 2';
    } else if (User.role === 'admin') {
      return 'type: 0';
    } else {
      throw new UnauthorizedException(
        '로그인 인증 과정에 문제가 발생하였습니다.',
      );
    }
  }
}
