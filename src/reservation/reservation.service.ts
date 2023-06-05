import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ReservationService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateReservationDto, userId: number) {
    const { hospitalId, memo } = data;

    return this.prisma.reservation.create({
      data: {
        hospitalId,
        memo,
        userId,
      },
    });
  }

  findAll() {
    return `This action returns all reservation`;
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
