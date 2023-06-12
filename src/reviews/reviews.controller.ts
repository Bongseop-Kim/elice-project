import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { CurrentUser } from 'src/common/decorators/user.decorator';
import { SuccessInterceptor } from 'src/common/interceptor/success.interceptor';
import { VoteTag } from './dto/reviews.dto';
import { ReviewsService } from './reviews.service';

@Controller('reviews')
@ApiTags('Reviews')
@UseInterceptors(SuccessInterceptor)
export class ReviewsController {
  constructor(
    private readonly reviewsService: ReviewsService,
    private readonly authService: AuthService,
  ) {}

  @ApiOperation({ summary: '리뷰 등록, 수정 및 취소하기' })
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @ApiBody({
    description: 'post new review',
  })
  @Post(':hospitalId')
  async newVote(
    @Param() param: VoteTag,
    @Body() body: VoteTag,
    @CurrentUser() User,
  ) {
    return await this.reviewsService.newVote(param, body, User);
  }

  @ApiOperation({ summary: '병원에 등록된 리뷰들 확인하기' })
  @ApiBody({
    description: 'show hospital reviews',
  })
  @Get(':hospitalId')
  async checkReviews(@Param() param: VoteTag) {
    return await this.reviewsService.checkReviews(param);
  }

  @ApiOperation({ summary: '로그인 유저 리뷰 확인하기' })
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @ApiBody({
    description: 'user review check',
  })
  @Get('user/:hospitalId')
  async isUserReviewed(@Param() param: VoteTag, @CurrentUser() User) {
    return await this.reviewsService.isUserReviewed(param, User);
  }
}
