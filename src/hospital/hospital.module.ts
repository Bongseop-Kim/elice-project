import { Module } from '@nestjs/common';
import { HospitalService } from './hospital.service';
import { HospitalController } from './hospital.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [HospitalController],
  providers: [HospitalService],
  exports: [HospitalService],
})
export class HospitalModule {}
