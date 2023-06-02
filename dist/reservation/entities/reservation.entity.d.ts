import { User, Child, Reservation } from '@prisma/client';
export declare class ReservationtEntity implements Reservation {
    id: number;
    whosReservation: User;
    whosReservationId: number;
    isUsersChild: Child;
    isUsersChildId: number;
    hospitalId: string;
    time: string;
    memo: string;
}
