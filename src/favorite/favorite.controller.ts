import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FavoriteService } from './favorite.service';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { SuccessInterceptor } from 'src/common/interceptor/success.interceptor';
import { CurrentUser } from 'src/common/decorators/user.decorator';

@ApiTags('Favorite')
@UseInterceptors(SuccessInterceptor)
@Controller('favorite')
export class FavoriteController {
  constructor(private readonly favoriteService: FavoriteService) {}

  @Post()
  @ApiOperation({ summary: '즐겨찾기' })
  @UseGuards(JwtAuthGuard)
  create(@Body() data: CreateFavoriteDto, @CurrentUser() user) {
    return this.favoriteService.create(data, user.id);
  }

  @Get('user')
  @ApiOperation({ summary: '유저ID로 즐겨찾기정보 가져오기' })
  @UseGuards(JwtAuthGuard)
  findByUser(@CurrentUser() user) {
    return this.favoriteService.findByUser(user.id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.favoriteService.remove(+id);
  }
}
