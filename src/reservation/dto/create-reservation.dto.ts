import { ApiProperty, PickType } from '@nestjs/swagger';
import { ReservationEntity } from '../entities/reservation.entity';
import { IsNotEmpty } from 'class-validator';

export class CreateReservationDto extends PickType(ReservationEntity, [
  'hospitalId',
  'memo',
  'reservedTime',
]) {
  @ApiProperty({
    example: '20230607',
  })
  @IsNotEmpty()
  reservedDate: string;
}
