import { HttpException, Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserType, Id } from './dto/admin.dtos'

@Injectable()
export class AdminRepository{
    constructor(private prisma: PrismaService) {}

    async getAllUserInfo(param: UserType){
        const { userType } = param;
        console.log(userType)
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

    async adminDeleteUser(param: Id){
        const { userId } = param
        const willBeDeletedUser = await this.prisma.user.delete({
            where: { id: Number(userId) }
        })
        return willBeDeletedUser
    }

    async adminVerifyManager(param: Id){
        const { userId } = param
        const verifyManager = await this.prisma.user.update({
            where: { id: Number(userId) },
            data: { adminVerified: true }
        })
        return verifyManager
    }
}