import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    UseGuards,
  } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { ChildService } from './child.service';
import { CurrentUser } from 'src/common/decorators/user.decorator';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { RegistChildDto } from './dto/regist-child.dto';

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
  async regustChild(@Body() body: RegistChildDto, @CurrentUser() User) {
    return await this.childService.registChild(body, User);
  }

}