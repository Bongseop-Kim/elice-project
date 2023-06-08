import { OmitType } from '@nestjs/swagger';
import { ImageEntity } from '../entities/image.entity';

export class CreateHospitalImageDto extends OmitType(ImageEntity, [
  'id',
  'kidId',
]) {}

export class CreateKidImageDto extends OmitType(ImageEntity, [
  'id',
  'hospitalId',
]) {}
