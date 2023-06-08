import { Module } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { ReservationController } from './reservation.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { HospitalService } from 'src/hospital/hospital.service';

@Module({
  imports: [PrismaModule],
  controllers: [ReservationController],
  providers: [ReservationService, HospitalService],
})
export class ReservationModule {}
