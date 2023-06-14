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
  NotFoundException,
} from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateMemoDto, UpdateReadDto } from './dto/update-reservation.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { SuccessInterceptor } from 'src/common/interceptor/success.interceptor';
import { ReservationEntity } from './entities/reservation.entity';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { CurrentUser } from 'src/common/decorators/user.decorator';
import { UserEntity } from 'src/users/entities/users.entity';
import { HospitalService } from 'src/hospital/hospital.service';

async function checkHospitalExistence(
  hospitalService: HospitalService,
  hospitalId: string,
): Promise<void> {
  const existHospital = await hospitalService.findById(hospitalId);
  if (!existHospital) {
    throw new NotFoundException(
      '일치하는 병원이 없습니다. HospitalId를 확인해주세요.',
    );
  }
}

@ApiTags('Reservation')
@UseInterceptors(SuccessInterceptor)
@Controller('reservation')
export class ReservationController {
  constructor(
    private readonly reservationService: ReservationService,
    private readonly hospitalService: HospitalService,
  ) {}

  @Post()
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: '예약하기' })
  @UseGuards(JwtAuthGuard)
  @ApiResponse({ type: ReservationEntity })
  async create(
    @CurrentUser() user: UserEntity,
    @Body() data: CreateReservationDto,
  ) {
    await checkHospitalExistence(this.hospitalService, data.hospitalId);
    const reservation = await this.reservationService.create(data, user.id);

    const year = reservation.reservedDate.getFullYear();
    const month = String(reservation.reservedDate.getMonth() + 1).padStart(
      2,
      '0',
    );
    const day = String(reservation.reservedDate.getDate()).padStart(2, '0');
    return { ...reservation, reservedDate: `${year}${month}${day}` };
  }

  @Get('reservation/:id')
  @ApiOperation({ summary: '예약ID로 예약정보 하나 가져오기' })
  @ApiResponse({ type: ReservationEntity })
  findOne(@Param('id') id: string) {
    return this.reservationService.findOne(+id);
  }

  @Get('user')
  @ApiOperation({ summary: '유저ID로 모든 예약정보 가져오기' })
  @ApiResponse({ type: [ReservationEntity] })
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  findByUser(@CurrentUser() user: UserEntity) {
    return this.reservationService.findByUser(user.id);
  }

  @Get('hospital/:hospitalId')
  @ApiOperation({ summary: '병원ID로 모든 예약정보 가져오기' })
  @ApiResponse({ type: [ReservationEntity] })
  async findByHospital(@Param('hospitalId') hospitalId: string) {
    await checkHospitalExistence(this.hospitalService, hospitalId);
    return this.reservationService.findByHospital(hospitalId);
  }

  //prismaOrm의 장점 memoUpdate, readUpdate 각 Api 생성 안해도 된다.
  //아니면 RDBMS의 장점인가? UPDATE Reservation SET memo="value" WHERE id="id";
  @Patch('memo/:id')
  @ApiOperation({ summary: '예약ID로 에약 memo 수정' })
  @ApiResponse({ type: ReservationEntity })
  updateMemo(@Param('id') id: string, @Body() data: UpdateMemoDto) {
    return this.reservationService.updateMemo(+id, data.memo);
  }

  @Patch('read/:id')
  @ApiOperation({ summary: '예약ID로 에약 read 수정' })
  @ApiResponse({ type: ReservationEntity })
  updateRead(@Param('id') id: string, @Body() data: UpdateReadDto) {
    return this.reservationService.updateRead(+id, data.read);
  }

  @Delete(':id')
  @ApiOperation({ summary: '예약ID로 예약 삭제' })
  @ApiResponse({ type: ReservationEntity })
  remove(@Param('id') id: string) {
    return this.reservationService.remove(+id);
  }
}
