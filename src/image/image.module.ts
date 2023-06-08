import { Module } from '@nestjs/common';
import { ImageService } from './image.service';
import { ImageController } from './image.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { HospitalService } from 'src/hospital/hospital.service';

@Module({
  imports: [PrismaModule],
  controllers: [ImageController],
  providers: [ImageService, HospitalService],
})
export class ImageModule {}
