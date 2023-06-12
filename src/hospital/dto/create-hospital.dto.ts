import { ApiProperty, OmitType } from '@nestjs/swagger';
import { HospitalEntity } from '../entities/hospital.entity';
import { IsOptional, IsString } from 'class-validator';

export class CreateHospitalDto extends OmitType(HospitalEntity, [
  'id',
  'wgs84Lat',
  'wgs84Lon',
]) {
  @ApiProperty({
    example: '37.5007795003494',
    required: false,
  })
  @IsOptional()
  @IsString()
  wgs84Lat: string;

  @ApiProperty({
    example: '127.1107520613008',
    required: false,
  })
  @IsOptional()
  @IsString()
  wgs84Lon: string;
}
