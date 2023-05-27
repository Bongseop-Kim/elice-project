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
import { ApiBody, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { CurrentUser } from 'src/common/decorators/user.decorator';
import { UserRequestDto } from './user.dot';
import { LoginRequestDto } from 'src/auth/dto/login.request.dto';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @ApiOperation({ summary: '현재 user 가져오기' })
  @UseGuards(JwtAuthGuard)
  @Get()
  getCurrentUser(@CurrentUser() user) {
    return user.readOnlyData;
  }

  @ApiOperation({ summary: '회원가입' })
  @ApiBody({
    description: 'post signup',
    type: UserRequestDto,
  })
  @Post('signup')
  async sighUp(@Body() body: UserRequestDto) {
    console.log(body);
    return await this.usersService.signUp(body);
  }

  @ApiOperation({ summary: '회원 탈퇴' })
  @ApiBody({
    description: 'user delete',
  })
  @Delete('deleteUser/:id')
  async deleteUser(@Param('id') id: string) {
    return await this.usersService.deleteUser(id);
  }

  @ApiOperation({ summary: '로그인' })
  @ApiBody({
    description: 'post login',
    type: LoginRequestDto,
  })
  @Post('login')
  logIn(@Body() data: LoginRequestDto) {
    return this.authService.jwtLogIn(data);
  }
}
