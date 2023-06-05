import { PrismaService } from 'src/prisma/prisma.service';
import { VoteTag } from './dto/reviews.dto';
export declare class ReviewsRepository {
    private prisma;
    constructor(prisma: PrismaService);
    newVote(param: VoteTag, body: VoteTag, User: any): Promise<import(".prisma/client").Reviews[]>;
    checkReviews(param: VoteTag): Promise<any[]>;
    isUserReviewed(param: VoteTag, User: any): Promise<import(".prisma/client").Reviews[]>;
}
