import { VoteTag } from './dto/reviews.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ReviewsService {
    private prisma;
    constructor(prisma: PrismaService);
    newVote(param: VoteTag, body: VoteTag, User: any): Promise<import(".prisma/client").Reviews[]>;
    checkReviews(param: VoteTag): Promise<any[]>;
    isUserReviewed(param: VoteTag, User: any): Promise<import(".prisma/client").Reviews[]>;
}
