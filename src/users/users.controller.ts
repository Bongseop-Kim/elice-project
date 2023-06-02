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

import { UsersService } from './users.service';
import { AuthService } from 'src/auth/auth.service';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { CurrentUser } from 'src/common/decorators/user.decorator';
import { CreateUserDto, UpdateUserDto } from './dto/users.dtos';
import { RequestLoginDto } from 'src/auth/dto/request.login.dto';
import { SuccessInterceptor } from 'src/common/interceptor/success.interceptor';

@Controller('user')
@ApiTags('User')
@UseInterceptors(SuccessInterceptor)
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @ApiOperation({ summary: '현재 user 가져오기' })
  @UseGuards(JwtAuthGuard)
  @Get()
  getCurrentUser(@CurrentUser() User) {
    return User;
  }

  @ApiOperation({ summary: '회원가입' })
  @ApiBody({
    description: 'post signup',
    type: CreateUserDto,
  })
  @Post('signup')
  async signUp(@Body() body: CreateUserDto) {
    return await this.usersService.signUp(body);
  }

  @ApiOperation({ summary: '회원 탈퇴' })
  @UseGuards(JwtAuthGuard)
  @ApiBody({
    description: 'user delete',
  })
  @Delete('')
  deleteUser(@CurrentUser() User) {
    return this.usersService.deleteUser(User.id);
  }

  @ApiOperation({ summary: '유저 로그인' })
  @ApiBody({
    description: 'post login',
    type: RequestLoginDto,
  })
  @Post('login')
  async logIn(@Body() data: RequestLoginDto) {
    return await this.authService.jwtLogIn(data);
  }

  @ApiOperation({ summary: '유저 정보 조회'})
  @UseGuards(JwtAuthGuard)
  @ApiBody({
    description: 'get userInfo'
  })
  @Get('get')
  getUserInfo(@CurrentUser() User) {
    return this.usersService.getUserInfo(User.id)
  }

  @ApiOperation({ summary: '유저 정보 수정'})
  @UseGuards(JwtAuthGuard)
  @ApiBody({
    description: 'update userInfo'
  })
  @Patch('')
  updateUserInfo(@Body() body: UpdateUserDto, @CurrentUser() User){
    return this.usersService.updateUserInfo(User.id, body)
  }
}
