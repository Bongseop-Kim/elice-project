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
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
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
  @ApiOperation({ summary: '즐겨찾기' })
  @ApiResponse({ type: FavoriteEntity })
  @UseGuards(JwtAuthGuard)
  create(@Body() data: CreateFavoriteDto, @CurrentUser() user: UserEntity) {
    return this.favoriteService.create(data, user.id);
  }

  @Get('user')
  @ApiOperation({ summary: '유저ID로 즐겨찾기정보 가져오기' })
  @ApiResponse({ type: [FavoriteEntity] })
  @UseGuards(JwtAuthGuard)
  findByUser(@CurrentUser() user: UserEntity) {
    return this.favoriteService.findByUser(user.id);
  }

  @Delete(':id')
  @ApiResponse({ type: FavoriteEntity })
  remove(@Param('id') id: string) {
    return this.favoriteService.remove(+id);
  }
}
