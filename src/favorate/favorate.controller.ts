import {
    Body,
    Controller,
    Delete,
    Param,
    Post,
    UseGuards,
  } from '@nestjs/common';
  //@ts-ignore
import { FavorateService } from './favorate.service';
import { AuthService } from 'src/auth/auth.service';
import { ApiBody, ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { CurrentUser } from 'src/common/decorators/user.decorator';
import { FavorateDto } from './dto/favorate.dto';

@Controller('favorate')
export class FavorateController{
    constructor(
        private readonly favorateService: FavorateService,
        private readonly authService: AuthService
    ) {}

    @ApiOperation({ summary: '즐겨찾기 등록'})
    @ApiBody({
        description: 'regist favorate',
        type: FavorateDto
    })
    @Post(':id')
    async newFavorate(@Param('id') id: number, @CurrentUser() User: Object){
        //@ts-ignore
        return await this.favorateService.newFavorate(id)
    }
}