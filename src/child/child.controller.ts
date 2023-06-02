import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    UseGuards,
  } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { ChildService } from './child.service';
import { CurrentUser } from 'src/common/decorators/user.decorator';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { RegistChildDto, UpdateChildDto } from './dto/child.dtos';

@Controller('child')
@ApiTags('Child')
export class ChildController {
  constructor(
    private readonly childService: ChildService,
  ) {}

  @ApiOperation({ summary: '아이 등록하기' })
  @UseGuards(JwtAuthGuard)
  @ApiBody({
    description: 'post registChild',
    type: RegistChildDto,
  })
  @Post('regist')
  registChild(@Body() body: RegistChildDto, @CurrentUser() User) {
    return this.childService.registChild(body, User);
  }

  @ApiOperation({ summary: '아이 정보 수정하기' })
  @UseGuards(JwtAuthGuard)
  @ApiBody({
    description: 'update child',
    type: UpdateChildDto
  })
  @Patch(':id')
  //@Body() body: Type 를 해주지 않으면 prisma method 실행 단계에서 prisma index 내부 파일에서 에러가 발생한다.
  updateChild(@Param('id') id: number, @Body() body: UpdateChildDto, @CurrentUser() User){
    return this.childService.updateChild(id, body)
  }

  @ApiOperation({ summary: '아이 정보 삭제하기' })
  @UseGuards(JwtAuthGuard)
  @ApiBody({
    description: 'delete child',
  })
  @Delete(':id')
  deleteChild(@Param('id') id: number, @CurrentUser() User){
    return this.childService.deleteChild(id)
  }
}