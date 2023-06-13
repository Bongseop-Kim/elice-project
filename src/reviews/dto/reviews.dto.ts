import { PickType } from '@nestjs/swagger';
import { ReviewsEntities } from '../entities/reviews.entity';

export class VoteTag extends PickType(ReviewsEntities, [
  'hospitalId',
  'vote',
  'posterId',
]) {}
