import { Injectable,
        UnauthorizedException,
        HttpException } from '@nestjs/common';
import { AdminRepository } from './admin.repository';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';

@Injectable()
export class AdminService {
    constructor(private readonly adminRepository: AdminRepository) {}

    /*@UseGuards(JwtAuthGuard)
    const isAdmin = (@CurrentUser()User:Object){
        반복 사용을 막기 위해 함수를 만들어주어 주입시키고 싶은데
        어디서 이런 로직을 구현해야 할지 잘 모르겠습니다.
        또한 User는 결국 @CurrentUser()라는 데코레이터 안에서 받아 오는 것으로
        알고 있는데 라우터에서 받아와야 하는 데코레이터를 이런 곳에서 사용하여
        각각의 API 안에다 넣는게 맞는지에 대해서도 잘 모르겠습니다.
    }*/

    getAllUserInfo(userType: string, User){       
        //기본적으로 관리자인지를 인증부터 합니다.
        if(User.role !== 'admin') throw new UnauthorizedException('접근 권한이 없습니다.')
        return this.adminRepository.getAllUserInfo(userType)
    }

    adminDeleteUser(id: number, User){
        if(User.role !== 'admin') throw new UnauthorizedException('접근 권한이 없습니다.')
        return this.adminRepository.adminDeleteUser(id)
    }

    adminVerifyManager(id: number, User){
        if(User.role !== 'admin') throw new UnauthorizedException('접근 권한이 없습니다.')
        return this.adminRepository.adminVerifyManager(id)
    }
}