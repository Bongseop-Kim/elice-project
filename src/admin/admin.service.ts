import { Injectable,
        UnauthorizedException,
        HttpException } from '@nestjs/common';
import { AdminRepository } from './admin.repository';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { UserType, Id } from './dto/admin.dtos'

@Injectable()
export class AdminService {
    constructor(private readonly adminRepository: AdminRepository) {}

    isAdmin(User): boolean {
        if(User.role !== 'admin') {
            throw new UnauthorizedException('접근 권한이 없습니다.')
        }
        return true;
    }

    getAllUserInfo(param: UserType, User){       
        this.isAdmin(User)
        return this.adminRepository.getAllUserInfo(param)
    }

    adminDeleteUser(param: Id, User){
        this.isAdmin(User)
        return this.adminRepository.adminDeleteUser(param)
    }

    adminVerifyManager(param: Id, User){
        this.isAdmin(User)
        return this.adminRepository.adminVerifyManager(param)
    }
}