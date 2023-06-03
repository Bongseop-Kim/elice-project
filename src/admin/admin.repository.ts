import { HttpException, Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AdminRepository{
    constructor(private prisma: PrismaService) {}

    async getAllUserInfo(userType: string){
        const modifyParam = Object.values(userType).join()
        if(modifyParam === 'generelclient'){
            const client = await this.prisma.user.findMany({
                where: {
                    role: 'client',
                }
            }) 
        return client
        } else if (modifyParam === 'hospitalclient'){
            const manager = await this.prisma.user.findMany({
                where: {
                    role: 'manager',
                    adminVerified: true
                }
            })
        return manager
        } else if (modifyParam === 'notverifiedhospitalclient'){
            const unVerifiedManager = await this.prisma.user.findMany({
                where: {
                    role: 'manager',
                    adminVerified: false
                }
            })
        return unVerifiedManager
        } else return new HttpException('요청 경로를 잘못 지정하였습니다.', 404)
    }

    async adminDeleteUser(id: number){
        const modifyId = Number(Object.values(id))
        const willBeDeletedUser = await this.prisma.user.delete({
            where: { id: modifyId }
        })
        return willBeDeletedUser
    }

    async adminVerifyManager(id: number){
        const modifyId = Number(Object.values(id))
        const verifyManager = await this.prisma.user.update({
            where: { id: modifyId },
            data: { adminVerified: true }
        })
        return verifyManager
    }
}