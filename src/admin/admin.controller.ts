import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    UseGuards,
    UseInterceptors,
  } from '@nestjs/common';

import { AuthService } from 'src/auth/auth.service';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { CurrentUser } from 'src/common/decorators/user.decorator';
import { RequestLoginDto } from 'src/auth/dto/request.login.dto';
import { SuccessInterceptor } from 'src/common/interceptor/success.interceptor';
import { AuthGuard } from '@nestjs/passport';
import { AdminService } from './admin.service';
import { UserType, Id } from './dto/admin.dtos'

@Controller('admin')
@ApiTags('Admin')
@UseInterceptors(SuccessInterceptor)
export class AdminController {
    constructor(
        private readonly adminService: AdminService,
        private readonly authService: AuthService,
    ) {}
    
    @ApiOperation({ summary: '타입별 유저 정보 조회'})
    @UseGuards(JwtAuthGuard)
    @ApiBody({
      description: 'get userInfo'
    })
    @Get('get/:userType')
    getUserInfo(@Param() param: UserType, @CurrentUser() User) {
      return this.adminService.getAllUserInfo(param, User)
    }

    @ApiOperation({ summary: '특정 유저 탈퇴'})
    @UseGuards(JwtAuthGuard)
    @ApiBody({
      description: 'delete user'
    })
    @Delete('delete/:id')
    adminDeleteUser(@Param() id: Id, @CurrentUser() User){
      return this.adminService.adminDeleteUser(id, User)
    }

    @ApiOperation({ summary: '병원 관리자 권한 승인' })
    @UseGuards(JwtAuthGuard)
    @ApiBody({
      description: 'verify hospital client'
    })
    @Patch('verify/:id')
    adminVerifyManager(@Param() id: Id, @CurrentUser() User){
      return this.adminService.adminVerifyManager(id, User)
    }
}