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
import { ApiResponse, ApiTags } from '@nestjs/swagger';
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
  @UseGuards(JwtAuthGuard)
  create(@CurrentUser() user, @Body() data: CreateReservationDto) {
    return this.reservationService.create(data, user.id);
  }

  @Get()
  @ApiResponse({ type: ReservationEntity })
  findAll() {
    return this.reservationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reservationService.findOne(+id);
  }

  @Get('user/:userId')
  findByUser(@Param('userId') userId: string) {
    return this.reservationService.findByUser(+userId);
  }

  @Get('hospital/:hospitalId')
  findByHospital(@Param('hospitalId') hospitalId: string) {
    return this.reservationService.findByHospital(hospitalId);
  }

  //prismaOrm의 장점 memoUpdate, readUpdate 각 Api 생성 안해도 된다.
  //아니면 RDBMS의 장점인가? UPDATE Reservation SET memo="value" WHERE id="id";
  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateReservationDto) {
    return this.reservationService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reservationService.remove(+id);
  }
}
