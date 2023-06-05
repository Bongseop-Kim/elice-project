import { ApiProperty } from '@nestjs/swagger';
import { Reservation } from '@prisma/client';

export class ReservationEntity implements Reservation {
  @ApiProperty()
  id: number;

  @ApiProperty()
  userId: number;

  @ApiProperty()
  hospitalId: string;

  @ApiProperty()
  memo: string;

  @ApiProperty()
  read: boolean;

  @ApiProperty()
  createdAt: Date;
}
