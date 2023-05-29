import { Injectable } from '@nestjs/common';
import { CreateHospitalDto } from './dto/create-hospital.dto';
import { UpdateHospitalDto } from './dto/update-hospital.dto';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class HospitalService {
  constructor(
    private readonly httpService: HttpService,
    private prisma: PrismaService,
  ) {}

  create(createHospitalDto: CreateHospitalDto) {
    return 'This action adds a new hospital';
  }

  async api() {
    const url = `https://apis.data.go.kr/B552657/HsptlAsembySearchService/getHsptlMdcncListInfoInqire?serviceKey=aQFwyyURxZPboOkpSx1uUEC9mvyECY1ClICrCdzJ9lNT9JZC0oGtU%2BKwiY7dSTrZm3wodyTWqkdltlLRwKFafQ%3D%3D&QD=D002&pageNo=1&numOfRows=1`;

    const res$ = this.httpService.get(url);
    const res = await lastValueFrom(res$);
    const resItem = res.data.response.body.items.item;

    const data: Prisma.HospitalCreateInput = {
      ...resItem,
      dutyTime1c: resItem.dutyTime1c?.toString(),
      dutyTime2c: resItem.dutyTime2c?.toString(),
      dutyTime3c: resItem.dutyTime3c?.toString(),
      dutyTime4c: resItem.dutyTime4c?.toString(),
      dutyTime5c: resItem.dutyTime5c?.toString(),
      dutyTime6c: resItem.dutyTime6c?.toString(),
      dutyTime7c: resItem.dutyTime7c?.toString(),
      dutyTime8c: resItem.dutyTime8c?.toString(),
    };

    console.log(data);

    // return this.prisma.hospital.create({ data });
  }

  findAll() {
    return `This action returns all hospital`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hospital`;
  }

  update(id: number, updateHospitalDto: UpdateHospitalDto) {
    return `This action updates a #${id} hospital`;
  }

  remove(id: number) {
    return `This action removes a #${id} hospital`;
  }
}
