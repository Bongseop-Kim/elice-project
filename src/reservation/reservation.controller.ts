import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UseGuards,
} from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SuccessInterceptor } from 'src/common/interceptor/success.interceptor';
import { ReservationEntity } from './entities/reservation.entity';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { CurrentUser } from 'src/common/decorators/user.decorator';

@ApiTags('Reservation')
@UseInterceptors(SuccessInterceptor)
@Controller('reservation')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  @Post()
  @ApiOperation({ summary: '예약하기' })
  @UseGuards(JwtAuthGuard)
  create(@CurrentUser() user, @Body() data: CreateReservationDto) {
    return this.reservationService.create(data, user.id);
  }

  @Get()
  @ApiOperation({ summary: '모든 예약 정보 가져오기' })
  @ApiResponse({ type: ReservationEntity })
  findAll() {
    return this.reservationService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: '예약ID로 예약정보 가져오기' })
  findOne(@Param('id') id: string) {
    return this.reservationService.findOne(+id);
  }

  @Get('user')
  @ApiOperation({ summary: '유저ID로 예약정보 가져오기' })
  @UseGuards(JwtAuthGuard)
  findByUser(@CurrentUser() user) {
    return this.reservationService.findByUser(user.id);
  }

  @Get('hospital/:hospitalId')
  @ApiOperation({ summary: '병원ID로 예약정보 가져오기' })
  findByHospital(@Param('hospitalId') hospitalId: string) {
    return this.reservationService.findByHospital(hospitalId);
  }

  //prismaOrm의 장점 memoUpdate, readUpdate 각 Api 생성 안해도 된다.
  //아니면 RDBMS의 장점인가? UPDATE Reservation SET memo="value" WHERE id="id";
  @Patch(':id')
  @ApiOperation({ summary: '예약ID로 에약 memo, read 수정' })
  update(@Param('id') id: string, @Body() data: UpdateReservationDto) {
    return this.reservationService.update(+id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: '예약ID로 예약 삭제' })
  remove(@Param('id') id: string) {
    return this.reservationService.remove(+id);
  }
}
