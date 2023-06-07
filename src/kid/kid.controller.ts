import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { KidService } from './kid.service';
import { CurrentUser } from 'src/common/decorators/user.decorator';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { GetKidsDto, RegistKidDto, UpdateKidDto } from './dto/kid.dtos';
import { SuccessInterceptor } from 'src/common/interceptor/success.interceptor';

@Controller('kid')
@ApiTags('Kid')
@UseInterceptors(SuccessInterceptor)
export class KidController {
  constructor(private readonly kidService: KidService) {}

  @ApiOperation({ summary: '아이 등록하기' })
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @ApiBody({
    description: 'post registKid',
    type: RegistKidDto,
  })
  @Post('regist')
  registKid(@CurrentUser() User) {
    return this.kidService.registKid(User);
  }

  @ApiOperation({ summary: '아이들 조회하기' })
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @ApiBody({
    description: 'get kids',
    type: GetKidsDto,
  })
  @Get('get')
  getKids(@CurrentUser() User) {
    return this.kidService.getKids(User);
  }

  @ApiOperation({ summary: '아이 정보 수정하기' })
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @ApiBody({
    description: 'update kid',
    type: UpdateKidDto,
  })
  @Patch(':id')
  //@Body() body: Type 를 해주지 않으면 prisma method 실행 단계에서 prisma index 내부 파일에서 에러가 발생한다.
  updateKid(
    @Param('id') id: string,
    @Body() body: UpdateKidDto,
    @CurrentUser() User,
  ) {
    return this.kidService.updateKid(id, body, User);
  }

  @ApiOperation({ summary: '아이 정보 삭제하기' })
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @ApiBody({
    description: 'delete kid',
  })
  @Delete(':id')
  deleteKid(@Param('id') id: string, @CurrentUser() User) {
    return this.kidService.deleteKid(id, User);
  }
}
