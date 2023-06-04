import { HttpException, Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserType, Id } from './dto/admin.dtos'

@Injectable()
export class AdminRepository{
    constructor(private prisma: PrismaService) {}

    async getAllUserInfo(userType: UserType){
        const { type } = userType;
        if(type === 'generelclient'){
            const client = await this.prisma.user.findMany({
                where: {
                    role: 'client',
                }
            }) 
        return client
        } else if (type === 'hospitalclient'){
            const manager = await this.prisma.user.findMany({
                where: {
                    role: 'manager',
                    adminVerified: true
                }
            })
        return manager
        } else if (type === 'notverifiedhospitalclient'){
            const unVerifiedManager = await this.prisma.user.findMany({
                where: {
                    role: 'manager',
                    adminVerified: false
                }
            })
        return unVerifiedManager
        } else return new HttpException('요청 경로를 잘못 지정하였습니다.', 404)
    }

    async adminDeleteUser(id: Id){
        const { userId } = id
        const willBeDeletedUser = await this.prisma.user.delete({
            where: { id: userId }
        })
        return willBeDeletedUser
    }

    async adminVerifyManager(id: Id){
        const { userId } = id
        const verifyManager = await this.prisma.user.update({
            where: { id: userId },
            data: { adminVerified: true }
        })
        return verifyManager
    }
}