import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { AuthService } from 'src/auth/auth.service';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { CurrentUser } from 'src/common/decorators/user.decorator';
import { CreateUserDto } from './dto/create.user.dto';
import { RequestLoginDto } from 'src/auth/dto/request.login.dto';

@Controller('user')
@ApiTags('User')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @ApiOperation({ summary: '현재 user 가져오기' })
  @UseGuards(JwtAuthGuard)
  @Get()
  getCurrentUser(@CurrentUser() user) {
    return user;
  }

  @ApiOperation({ summary: '회원가입' })
  @ApiBody({
    description: 'post signup',
    type: CreateUserDto,
  })
  @Post('signup')
  async sighUp(@Body() body: CreateUserDto) {
    return await this.usersService.signUp(body);
  }

  @ApiOperation({ summary: '회원 탈퇴' })
  @ApiBody({
    description: 'user delete',
  })
  @UseGuards(JwtAuthGuard)
  @Delete('')
  async deleteUser(@CurrentUser() user) {
    return await this.usersService.deleteUser(user.id);
  }

  @ApiOperation({ summary: '로그인' })
  @ApiBody({
    description: 'post login',
    type: RequestLoginDto,
  })
  @Post('login')
  logIn(@Body() data: RequestLoginDto) {
    return this.authService.jwtLogIn(data);
  }
}
