import { ApiProperty } from '@nestjs/swagger';

export class CreateHospitalDto {
  @ApiProperty()
  dutyAddr: string;

  @ApiProperty()
  dutyDiv: string;

  @ApiProperty()
  dutyDivNam: string;

  @ApiProperty()
  dutyEmcls: string;

  @ApiProperty()
  dutyEmclsName: string;

  @ApiProperty()
  dutyEryn: string;

  @ApiProperty()
  dutyEtc: string;

  @ApiProperty()
  dutyMapimg: string;

  @ApiProperty()
  dutyName: string;

  @ApiProperty()
  dutyTel1: string | undefined;

  @ApiProperty()
  dutyTime1c: string | undefined;

  @ApiProperty()
  dutyTime2c: string | undefined;

  @ApiProperty()
  dutyTime3c: string | undefined;

  @ApiProperty()
  dutyTime4c: string | undefined;

  @ApiProperty()
  dutyTime5c: string | undefined;

  @ApiProperty()
  dutyTime6c: string | undefined;

  @ApiProperty()
  dutyTime7c: string | undefined;

  @ApiProperty()
  dutyTime8c: string | undefined;

  @ApiProperty()
  hpid: string;

  @ApiProperty()
  postCdn1: string;

  @ApiProperty()
  postCdn2: string;

  @ApiProperty()
  wgs84Lat: string;

  @ApiProperty()
  wgs84Lon: string;
}
