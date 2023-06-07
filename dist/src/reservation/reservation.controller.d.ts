import { ReservationService } from './reservation.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
export declare class ReservationController {
    private readonly reservationService;
    constructor(reservationService: ReservationService);
    create(user: any, data: CreateReservationDto): import(".prisma/client").Prisma.Prisma__ReservationClient<import(".prisma/client").Reservation, never>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__ReservationClient<import(".prisma/client").Reservation, never>;
    findByUser(user: any): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Reservation[]>;
    findByHospital(hospitalId: string): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Reservation[]>;
    update(id: string, data: UpdateReservationDto): import(".prisma/client").Prisma.Prisma__ReservationClient<import(".prisma/client").Reservation, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ReservationClient<import(".prisma/client").Reservation, never>;
}
