import { ApiProperty } from '@nestjs/swagger';
import { User, Child, Reservation } from '@prisma/client';

export class ReservationtEntity implements Reservation {
    @ApiProperty()
    id: number;

    @ApiProperty()
    whosReservation: User;

    @ApiProperty()
    whosReservationId: number;

    @ApiProperty()
    isUsersChild: Child;

    @ApiProperty()
    isUsersChildId: number;

    @ApiProperty()
    hospitalId: number;

    @ApiProperty()
    time: string;

    @ApiProperty()
    memo: string;
}