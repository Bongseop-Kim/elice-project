import { Module } from '@nestjs/common';
import { HospitalService } from './hospital.service';
import { HospitalController } from './hospital.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { HospitalRepository } from './hospital.repository';

@Module({
  imports: [PrismaModule],
  controllers: [HospitalController],
  providers: [HospitalService, HospitalRepository],
})
export class HospitalModule {}
