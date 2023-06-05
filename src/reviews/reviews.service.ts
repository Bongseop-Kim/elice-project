import {
    Injectable,
    UnauthorizedException,
    HttpException,
  } from '@nestjs/common';
import { ReviewsRepository } from './reviews.repository'
import { VoteTag } from './dto/reviews.dto';

@Injectable()
export class ReviewsService{
    constructor(private readonly reviewsRepository: ReviewsRepository) {}

    async newVote(param: VoteTag, body: VoteTag, User){
        return await this.reviewsRepository.newVote(param, body, User)
    }

    async checkReviews(param: VoteTag){
        return await this.reviewsRepository.checkReviews(param)
    }

    async isUserReviewed(param: VoteTag, User){
        return await this.reviewsRepository.isUserReviewed(param, User)
    }
}