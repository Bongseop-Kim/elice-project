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
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { CurrentUser } from 'src/common/decorators/user.decorator';
import { RequestLoginDto } from 'src/auth/dto/request.login.dto';
import { SuccessInterceptor } from 'src/common/interceptor/success.interceptor';
import { AuthGuard } from '@nestjs/passport';
import { AdminService } from './admin.service';
import { UserType, Id, Ids } from './dto/admin.dtos'

@Controller('admin')
@ApiTags('Admin')
@UseInterceptors(SuccessInterceptor)
export class AdminController {
    constructor(
        private readonly adminService: AdminService,
        private readonly authService: AuthService,
    ) {}
    
    @ApiOperation({ summary: '타입별 유저 정보 조회'})
    @ApiBearerAuth('access-token')
    @UseGuards(JwtAuthGuard)
    @ApiBody({
      description: 'get userInfo'
    })
    @Get('get/:userType')
    getUserInfo(@Param() param: UserType, @CurrentUser() User) {
      return this.adminService.getAllUserInfo(param, User)
    }

    @ApiOperation({ summary: '특정 유저 탈퇴' })
    @ApiBearerAuth('access-token')
    @UseGuards(JwtAuthGuard)
    @ApiBody({
      description: 'delete user'
    })
    @Delete('delete/:userId')
    adminDeleteUser(@Param() param: Id, @CurrentUser() User){
      return this.adminService.adminDeleteUser(param, User)
    }

    @ApiOperation({ summary: '선택된 전체 유저 삭제' })
    @ApiBearerAuth('access-token')
    @UseGuards(JwtAuthGuard)
    @ApiBody({
      description: 'delete select users'
    })
    @Delete('deleteall')
    adminDeleteAllUsers(@Body() body: Ids, @CurrentUser() User){
      return this.adminService.adminDeleteAllUsers(body, User)
    }

    @ApiOperation({ summary: '병원 관리자 권한 승인' })
    @ApiBearerAuth('access-token')
    @UseGuards(JwtAuthGuard)
    @ApiBody({
      description: 'verify hospital client'
    })
    @Patch('verify/:userId')
    adminVerifyManager(@Param() param: Id, @CurrentUser() User){
      return this.adminService.adminVerifyManager(param, User)
    }

    @ApiOperation({ summary: '선택된 전체 유저 승인' })
    @ApiBearerAuth('access-token')
    @UseGuards(JwtAuthGuard)
    @ApiBody({
      description: 'verify select users'
    })
    @Patch('verifyall')
    adminVerfyAllManagers(@Body() body: Ids, @CurrentUser() User){
      return this.adminService.adminVerfyAllManagers(body, User)
    }
}