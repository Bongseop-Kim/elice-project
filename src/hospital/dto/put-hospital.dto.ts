import { OmitType } from '@nestjs/swagger';
import { CreateHospitalDto } from './create-hospital.dto';
import { HospitalEntity } from '../entities/hospital.entity';

export class PutHospitalDto extends OmitType(HospitalEntity, ['id']) {}
