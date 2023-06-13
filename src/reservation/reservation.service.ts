import { HttpException, Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { error } from 'console';

@Injectable()
export class ReservationService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateReservationDto, userId: number) {
    const { hospitalId, memo, reservedTime, reservedDate } = data;

    const year = parseInt(reservedDate.substring(0, 4), 10);
    const month = parseInt(reservedDate.substring(4, 6), 10) - 1; // Subtract 1 from the month since it is zero-based.
    const day = parseInt(reservedDate.substring(6, 8), 10);
    const typeDate = new Date(year, month, day);

    const hospital = await this.prisma.hospital.findUnique({
      where: { id: hospitalId },
      include: { reservations: true },
    });

    hospital.reservations.map((reservation) => {
      const year = reservation.reservedDate.getFullYear();
      const month = String(reservation.reservedDate.getMonth() + 1).padStart(
        2,
        '0',
      );
      const day = String(reservation.reservedDate.getDate()).padStart(2, '0');

      const dateString = `${year}${month}${day}`;
      if (dateString === reservedDate) {
        if (reservation.reservedTime === reservedTime) {
          throw new HttpException(
            '해당 날짜, 해당 시간에 예약이 이미 존재합니다.',
            409,
          );
        }
      }
    });

    return this.prisma.reservation.create({
      data: {
        reservedTime,
        reservedDate: typeDate,
        hospitalId,
        memo,
        userId,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.reservation.findUnique({
      where: {
        id,
      },
    });
  }

  findByUser(userId: number) {
    return this.prisma.reservation.findMany({
      where: { userId },
      include: {
        hospital: {
          select: {
            dutyName: true,
          },
        },
      },
    });
  }

  findByHospital(hospitalId: string) {
    return this.prisma.reservation.findMany({
      where: { hospitalId },
    });
  }

  update(id: number, data: UpdateReservationDto) {
    return this.prisma.reservation.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.reservation.delete({
      where: { id },
    });
  }
}
