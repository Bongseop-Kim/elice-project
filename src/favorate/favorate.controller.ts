import { Controller, Param, Post } from '@nestjs/common';
import { FavorateService } from './favorate.service';
import { AuthService } from 'src/auth/auth.service';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from 'src/common/decorators/user.decorator';
import { FavorateDto } from './dto/favorate.dto';

@ApiTags('Favorate')
@Controller('favorate')
export class FavorateController {
  constructor(
    private readonly favorateService: FavorateService,
    private readonly authService: AuthService,
  ) {}

  @ApiOperation({ summary: '즐겨찾기 등록' })
  @ApiBody({
    description: 'regist favorate',
    type: FavorateDto,
  })
  @Post(':id')
  async newFavorate(@Param('id') id: number, @CurrentUser() User) {
    // return await this.favorateService.newFavorate(id);
  }
}
