import { ApiProperty } from '@nestjs/swagger';
import { User, Kid, Reservation } from '@prisma/client';

export class ReservationtEntity implements Reservation {
  @ApiProperty()
  id: number;

  @ApiProperty()
  whosReservation: User;

  @ApiProperty()
  whosReservationId: number;

  @ApiProperty()
  isUsersKid: Kid;

  @ApiProperty()
  isUsersKidId: number;

  @ApiProperty()
  hospitalId: string;

  @ApiProperty()
  time: string;

  @ApiProperty()
  memo: string;
}
