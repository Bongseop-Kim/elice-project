import { HttpException, Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserEntity } from 'src/users/entities/users.entity';

@Injectable()
export class ReservationService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateReservationDto, userId: number) {
    const { hospitalId, memo, reservedTime, reservedDate } = data;

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
      const day =
        parseInt(String(reservation.reservedDate.getDate()).padStart(2, '0')) -
        1;
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

    const year = parseInt(reservedDate.substring(0, 4));
    const month = parseInt(reservedDate.substring(4, 6)) - 1; // Subtract 1 from the month since it is zero-based.
    const day = parseInt(reservedDate.substring(6, 8)) + 1;
    const typeDate = new Date(year, month, day);

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

  getAlarm(user: UserEntity) {
    const currentDate = new Date();
    const nextWeek = new Date(currentDate.setDate(currentDate.getDate() + 7));

    return this.prisma.reservation.findMany({
      where: {
        userId: user.id,
        reservedDate: {
          gte: new Date(),
          lt: nextWeek,
        },
      },
    });
  }

  findByHospital(hospitalId: string) {
    return this.prisma.reservation.findMany({
      where: { hospitalId },
    });
  }

  updateMemo(id: number, memo: string) {
    return this.prisma.reservation.update({
      where: { id },
      data: { memo },
    });
  }

  updateRead(id: number, read: boolean) {
    return this.prisma.reservation.update({
      where: { id },
      data: { read },
    });
  }

  remove(id: number) {
    return this.prisma.reservation.delete({
      where: { id },
    });
  }
}
