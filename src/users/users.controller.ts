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
import {
  CreateManagerDto,
  CreateUserDto,
  UpdateUserDto,
} from './dto/users.dtos';
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
  @Post('clientsignup')
  async clientSignUp(@Body() body: CreateUserDto) {
    return await this.usersService.clientSignUp(body);
  }

  @ApiOperation({ summary: '회원 탈퇴' })
  @UseGuards(JwtAuthGuard)
  @ApiBody({
    description: 'user delete',
  })
  @Delete('delete')
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

  @ApiOperation({ summary: '유저 정보 조회' })
  @UseGuards(JwtAuthGuard)
  @ApiBody({
    description: 'get userInfo',
  })
  @Get('get')
  getUserInfo(@CurrentUser() User) {
    return this.usersService.getUserInfo(User.id);
  }

  @ApiOperation({ summary: '유저 정보 수정' })
  @UseGuards(JwtAuthGuard)
  @ApiBody({
    description: 'update userInfo',
  })
  @Patch('update')
  updateUserInfo(@Body() body: UpdateUserDto, @CurrentUser() User){
    return this.usersService.updateUserInfo(User.id, body)
  }

  @ApiOperation({ summary: '병원 관계자 회원가입' })
  @ApiBody({
    description: 'post signup',
    type: CreateManagerDto,
  })
  @Post('managersignup')
  async managerSignUp(@Body() body: CreateManagerDto) {
    return await this.usersService.managerSignUp(body);
  }

  //어떤 타입의 유저가 로그인을 했는지 확인하고 그에 맞는 페이지를 호출해주는 API입니다.
  @ApiOperation({ summary: '유저 등급 분류' })
  @UseGuards(JwtAuthGuard)
  @ApiBody({
    description: 'verify check',
  })
  @Get('/check/:id')
  async verifyCheck(@Param() id: number, @CurrentUser() User) {
    return await this.usersService.verifyCheck(id, User);
  }
}
