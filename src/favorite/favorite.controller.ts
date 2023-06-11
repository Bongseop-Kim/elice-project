import {
  Controller,
  Get,
  Post,
  Param,
  Delete,
  UseGuards,
  UseInterceptors,
  Body,
} from '@nestjs/common';
import { FavoriteService } from './favorite.service';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { SuccessInterceptor } from 'src/common/interceptor/success.interceptor';
import { CurrentUser } from 'src/common/decorators/user.decorator';
import { FavoriteEntity } from './entities/favorite.entity';
import { UserEntity } from 'src/users/entities/users.entity';

@ApiTags('Favorite')
@UseInterceptors(SuccessInterceptor)
@Controller('favorite')
export class FavoriteController {
  constructor(private readonly favoriteService: FavoriteService) {}

  @Post()
  @ApiOperation({ summary: '즐겨찾기 토글' })
  @ApiResponse({ type: FavoriteEntity })
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  toggle(
    @Body('hospitalId') hospitalId: string,
    @CurrentUser() user: UserEntity,
  ) {
    return this.favoriteService.toggle(hospitalId, user.id);
  }

  @Get()
  @ApiOperation({ summary: '유저ID로 즐겨찾기정보 가져오기' })
  @ApiResponse({ type: [FavoriteEntity] })
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  findByUser(@CurrentUser() user: UserEntity) {
    return this.favoriteService.findByUser(user.id);
  }
}
