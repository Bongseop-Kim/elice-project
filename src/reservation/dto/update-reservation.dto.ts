import { PickType } from '@nestjs/swagger';
import { ReservationEntity } from '../entities/reservation.entity';

export class UpdateMemoDto extends PickType(ReservationEntity, ['memo']) {}

export class UpdateReadDto extends PickType(ReservationEntity, ['read']) {}
