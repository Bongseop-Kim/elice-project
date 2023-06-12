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
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { CurrentUser } from 'src/common/decorators/user.decorator';
import {
  CreateManagerDto,
  CreateUserDto,
  UpdateUserDto,
} from './dto/users.dtos';
import { RequestLoginDto } from 'src/auth/dto/request.login.dto';
import { SuccessInterceptor } from 'src/common/interceptor/success.interceptor';
import { UserEntity } from './entities/users.entity';

@Controller('users')
@ApiTags('Users')
@UseInterceptors(SuccessInterceptor)
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @ApiOperation({ summary: '현재 user 가져오기' })
  @ApiResponse({ type: UserEntity })
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Get()
  getCurrentUser(@CurrentUser() User: UserEntity) {
    return User;
  }

  @ApiOperation({ summary: '회원가입' })
  @Post('clientsignup')
  @ApiResponse({ type: UserEntity })
  async clientSignUp(@Body() body: CreateUserDto) {
    return await this.usersService.clientSignUp(body);
  }

  @ApiOperation({ summary: '회원 탈퇴' })
  @ApiResponse({ type: UserEntity })
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Delete('delete')
  deleteUser(@CurrentUser() User) {
    return this.usersService.deleteUser(User.id);
  }

  @ApiOperation({ summary: '유저 로그인' })
  @ApiResponse({ type: UserEntity })
  @Post('login')
  async logIn(@Body() data: RequestLoginDto) {
    return await this.authService.jwtLogIn(data);
  }

  @ApiOperation({ summary: '유저 정보 조회' })
  @ApiResponse({ type: UserEntity })
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Get('get')
  getUserInfo(@CurrentUser() User) {
    return this.usersService.getUserInfo(User.id);
  }

  @ApiOperation({ summary: '유저 정보 수정' })
  @ApiResponse({ type: UserEntity })
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Patch('update')
  updateUserInfo(@Body() body: UpdateUserDto, @CurrentUser() User) {
    return this.usersService.updateUserInfo(User.id, body);
  }

  @ApiOperation({ summary: '병원 관계자 회원가입' })
  @ApiResponse({ type: UserEntity })
  @Post('managersignup')
  async managerSignUp(@Body() body: CreateManagerDto) {
    return await this.usersService.managerSignUp(body);
  }
}
