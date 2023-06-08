import { OmitType } from '@nestjs/swagger';
import { HospitalEntity } from '../entities/hospital.entity';

export class CreateHospitalDto extends OmitType(HospitalEntity, ['id']) {}
