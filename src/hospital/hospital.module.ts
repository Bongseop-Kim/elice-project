import { Module } from '@nestjs/common';
import { HospitalService } from './hospital.service';
import { HospitalController } from './hospital.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ImageService } from 'src/image/image.service';

@Module({
  imports: [PrismaModule],
  controllers: [HospitalController],
  providers: [HospitalService, ImageService],
  exports: [HospitalService],
})
export class HospitalModule {}
