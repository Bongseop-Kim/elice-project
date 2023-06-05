import { ReviewsRepository } from './reviews.repository';
import { VoteTag } from './dto/reviews.dto';
export declare class ReviewsService {
    private readonly reviewsRepository;
    constructor(reviewsRepository: ReviewsRepository);
    newVote(param: VoteTag, body: VoteTag, User: any): Promise<import(".prisma/client").Reviews[]>;
    checkReviews(param: VoteTag): Promise<any[]>;
}
