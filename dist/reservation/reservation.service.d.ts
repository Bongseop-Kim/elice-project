import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ReservationService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateReservationDto, userId: number): import(".prisma/client").Prisma.Prisma__ReservationClient<import(".prisma/client").Reservation, never>;
    findAll(): string;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ReservationClient<import(".prisma/client").Reservation, never>;
    findByUser(userId: number): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Reservation[]>;
    findByHospital(hospitalId: string): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Reservation[]>;
    update(id: number, data: UpdateReservationDto): import(".prisma/client").Prisma.Prisma__ReservationClient<import(".prisma/client").Reservation, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__ReservationClient<import(".prisma/client").Reservation, never>;
}
