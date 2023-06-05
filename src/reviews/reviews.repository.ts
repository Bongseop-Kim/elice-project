import { HttpException, Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { VoteTag } from './dto/reviews.dto';

@Injectable()
export class ReviewsRepository{
    constructor(private prisma: PrismaService) {}

    async newVote(param: VoteTag, body: VoteTag, User){
        const { hospitalId } = param
        const { vote } = body
        const check = await this.prisma.reviews.findMany({
            where: {
                posterId: User.id,
                hospitalId: hospitalId
            }
        })
        if(check.length === 0){
            await this.prisma.reviews.create({
                data: {
                    posterId: User.id,
                    hospitalId: hospitalId,
                    vote: vote
                }
            })
        } else if (check.length !== 0 && check[0].vote === vote){
            await this.prisma.reviews.delete({
                where: { id: check[0].id }
            })
        } else if (check.length !== 0 && check[0].vote !== vote){
            await this.prisma.reviews.update({
                where: { id: check[0].id},
                data: {
                    vote: vote
                }
            })
        }
        return check
    }

    async checkReviews(param: VoteTag){
        const { hospitalId } = param
        let result = []
        for(let i=0;i<6;i++){
            const reviews = await this.prisma.reviews.findMany({
                where: {
                    hospitalId: hospitalId,
                    vote: (i+1)
                    }
                })
                result.push(reviews.length)
            }
            return result;
    }
}