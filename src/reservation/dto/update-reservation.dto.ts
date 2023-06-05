import { PickType } from '@nestjs/swagger';
import { ReservationEntity } from '../entities/reservation.entity';

export class UpdateReservationDto extends PickType(ReservationEntity, [
  'memo',
  'read',
]) {}
