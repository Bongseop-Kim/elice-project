import { Injectable,
        UnauthorizedException,
        HttpException } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { UserType, Id } from './dto/admin.dtos'
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class AdminService {
    constructor(private prisma: PrismaService) {}

    isAdmin(User): boolean {
        if(User.role !== 'admin') {
            throw new UnauthorizedException('접근 권한이 없습니다.')
        }
        return true;
    }

    async getAllUserInfo(param: UserType, User){       
        this.isAdmin(User)
        const { userType } = param;
        if(userType === 'generelclient'){
            const client = await this.prisma.user.findMany({
                where: {
                    role: 'client',
                }
            })
        return client
        } else if (userType === 'hospitalclient'){
            const manager = await this.prisma.user.findMany({
                where: {
                    role: 'manager',
                    adminVerified: true
                }
            })
        return manager
        } else if (userType === 'notverifiedhospitalclient'){
            const unVerifiedManager = await this.prisma.user.findMany({
                where: {
                    role: 'manager',
                    adminVerified: false
                }
            })
        return unVerifiedManager
        } else return new HttpException('요청 경로를 잘못 지정하였습니다.', 404)
    }

    async adminDeleteUser(param: Id, User){       
        this.isAdmin(User)
        const { userId } = param
        const willBeDeletedUser = await this.prisma.user.delete({
            where: { id: Number(userId) }
        })
        return willBeDeletedUser
    }

    async adminVerifyManager(param: Id, User){
        this.isAdmin(User)
        const { userId } = param
        const verifyManager = await this.prisma.user.update({
            where: { id: Number(userId) },
            data: { adminVerified: true }
        })
        return verifyManager
    }
}
