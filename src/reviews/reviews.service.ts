import {
    Injectable,
    UnauthorizedException,
    HttpException,
  } from '@nestjs/common';
import { VoteTag, VoteTagInput } from './dto/reviews.dto';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { Vote } from './entities/reviews.entity'
import { MappedType } from '@nestjs/mapped-types'

@Injectable()
export class ReviewsService{
    constructor(private prisma: PrismaService) {}

    async newVote(param: VoteTagInput, body: VoteTagInput, User){
        const { hospitalId } = param
        const { vote } = body
        const voteEnum: Vote = vote as Vote;
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
                    vote: voteEnum
                }
            })
        } else if (check.length !== 0 && check[0].vote === voteEnum){
            await this.prisma.reviews.delete({
                where: { id: check[0].id }
            })
        } else if (check.length !== 0 && check[0].vote !== voteEnum){
            await this.prisma.reviews.update({
                where: { id: check[0].id },
                data: {
                    vote: voteEnum
                }
            })
        }
        const isCheckChanged = await this.prisma.reviews.findMany({
            where: {
                posterId: User.id,
                hospitalId: hospitalId
            }
        })
        return isCheckChanged
    }


    async checkReviews(param: VoteTagInput){
        const { hospitalId } = param
        let result = []
        const voteValues = Object.values(Vote)
        for(const voteValue of voteValues){
            const reviews = await this.prisma.reviews.findMany({
                where: {
                    hospitalId: hospitalId,
                    vote: voteValue
                    }
                })
                result.push(reviews.length)
            }
            return result;
    }

    async isUserReviewed(param: VoteTagInput, User){
        const { hospitalId } = param
        const check = await this.prisma.reviews.findMany({
            where: {
                posterId: User.id,
                hospitalId: hospitalId
            }
        })
        return check;
    }
}