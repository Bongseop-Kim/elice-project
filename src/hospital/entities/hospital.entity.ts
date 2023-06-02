import { ApiProperty } from '@nestjs/swagger';
import { Hospital } from '@prisma/client';

export class HospitalEntity implements Hospital {
  @ApiProperty()
  id: string;

  @ApiProperty()
  dutyAddr: string;

  @ApiProperty()
  dutyAddr1Depth: string;

  @ApiProperty()
  dutyAddr2Depth: string;

  @ApiProperty()
  dutyAddr3Depth: string;

  @ApiProperty()
  dutyDiv: string;

  @ApiProperty()
  dutyDivNam: string;

  @ApiProperty()
  dutyEmcls: string;

  @ApiProperty()
  dutyEmclsName: string;

  @ApiProperty()
  dutyEryn: number;

  @ApiProperty()
  dutyEtc: string;

  @ApiProperty()
  dutyInf: string;

  @ApiProperty()
  dutyMapimg: string;

  @ApiProperty()
  dutyName: string;

  @ApiProperty()
  dutyTel1: string;

  @ApiProperty()
  dutyTel3: string;

  @ApiProperty()
  dutyTime1c: string;

  @ApiProperty()
  dutyTime1s: string;

  @ApiProperty()
  dutyTime2c: string;

  @ApiProperty()
  dutyTime2s: string;

  @ApiProperty()
  dutyTime3c: string;

  @ApiProperty()
  dutyTime3s: string;

  @ApiProperty()
  dutyTime4c: string;

  @ApiProperty()
  dutyTime4s: string;

  @ApiProperty()
  dutyTime5c: string;

  @ApiProperty()
  dutyTime5s: string;

  @ApiProperty()
  dutyTime6c: string;

  @ApiProperty()
  dutyTime6s: string;

  @ApiProperty()
  dutyTime7c: string;

  @ApiProperty()
  dutyTime7s: string;

  @ApiProperty()
  dutyTime8c: string;

  @ApiProperty()
  dutyTime8s: string;

  @ApiProperty()
  wgs84Lat: number;

  @ApiProperty()
  wgs84Lon: number;

  @ApiProperty()
  adminId: number;

  @ApiProperty()
  startLunch: string;

  @ApiProperty()
  endLunch: string;

  @ApiProperty()
  imageId: number;
}
