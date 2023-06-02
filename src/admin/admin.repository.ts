import { HttpException, Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AdminRepository{
    constructor(private prisma: PrismaService) {}

    async getAllUserInfo(userType: string){
        if(userType === 'generelUser'){
            const client = await this.prisma.user.findMany({
                where: {
                    role: 'client',
                }
            }) 
        return client
        } else if (userType === 'hospitalClient'){
            const manager = await this.prisma.user.findMany({
                where: {
                    role: 'manager',
                    adminVerified: 'yes'
                }
            })
        return manager
        } else if (userType === 'notVerifiedHospitalClient'){
            const unVerifiedManager = await this.prisma.user.findMany({
                where: {
                    role: 'manager',
                    adminVerified: 'no'
                }
            })
        return unVerifiedManager
        } else return new HttpException('요청 경로를 잘못 지정하였습니다.', 404)
    }
    /*유저의 adminVerified 레코드를 Boolean Type으로 변경할 계획입니다만
    MySQL 연동 과정에서 에러가 많이 발생해 당시에는 String으로 변경했었습니다.
    다른 파트의 구현이 많이 남아있기에 현재로써는 변경하지 못했습니다만
    API를 최대한 빨리 마치고 이 부분부터 당장 고치고 싶습니다. */

    async adminDeleteUser(id: number){
        const willBeDeletedUser = await this.prisma.user.delete({
            where: { id }
        })
        return willBeDeletedUser
    }

    async adminVerifyManager(id: number){
        const verifyManager = await this.prisma.user.update({
            where: { id },
            data: { adminVerified: 'yes' }
        })
        return verifyManager
    }
}