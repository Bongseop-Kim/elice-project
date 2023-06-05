import { Reservation } from '@prisma/client';
export declare class ReservationEntity implements Reservation {
    id: number;
    userId: number;
    hospitalId: string;
    memo: string;
    read: boolean;
    createdAt: Date;
}
