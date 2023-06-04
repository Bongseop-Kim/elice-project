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

    getAllUserInfo(userType: UserType, User){       
        this.isAdmin(User)
        return this.adminRepository.getAllUserInfo(userType)
    }

    adminDeleteUser(id: Id, User){
        this.isAdmin(User)
        return this.adminRepository.adminDeleteUser(id)
    }

    adminVerifyManager(id: Id, User){
        this.isAdmin(User)
        return this.adminRepository.adminVerifyManager(id)
    }
}