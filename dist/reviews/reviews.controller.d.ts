import { AuthService } from 'src/auth/auth.service';
import { VoteTag } from './dto/reviews.dto';
import { ReviewsService } from './reviews.service';
export declare class ReviewsController {
    private readonly reviewsService;
    private readonly authService;
    constructor(reviewsService: ReviewsService, authService: AuthService);
    newVote(param: VoteTag, body: VoteTag, User: any): Promise<import(".prisma/client").Reviews[]>;
    checkReviews(param: VoteTag): Promise<any[]>;
}
