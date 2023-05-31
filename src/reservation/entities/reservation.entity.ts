import { ApiProperty } from '@nestjs/swagger';
import { User, Child, Reservation } from '@prisma/client';

export class ReservationtEntity implements Reservation {
    @ApiProperty()
    id: string;

    @ApiProperty()
    whosReservation: User;

    @ApiProperty()
    whosReservationId: string;

    @ApiProperty()
    isUsersChild: Child;

    @ApiProperty()
    isUsersChildId: string;

    @ApiProperty()
    hospitalId: string;

    @ApiProperty()
    time: string;

    @ApiProperty()
    memo: string;
}