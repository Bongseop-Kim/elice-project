import { ApiProperty } from '@nestjs/swagger';
import { User, Reservation } from '@prisma/client';

export class AppointmentEntity implements Reservation {
    @ApiProperty()
    id: string;

    @ApiProperty()
    whosReservation: User;

    @ApiProperty()
    whosReservationId: string;

    @ApiProperty()
    isUsersChild: string;

    @ApiProperty()
    hpid: string;

    @ApiProperty()
    time: string;

    @ApiProperty()
    memo: string;
}