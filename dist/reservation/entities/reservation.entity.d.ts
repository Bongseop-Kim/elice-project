import { User, Kid, Reservation } from '@prisma/client';
export declare class ReservationtEntity implements Reservation {
    id: number;
    whosReservation: User;
    whosReservationId: number;
    isUsersKid: Kid;
    isUsersKidId: number;
    hospitalId: string;
    time: string;
    memo: string;
}
