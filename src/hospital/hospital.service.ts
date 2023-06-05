import { Injectable } from '@nestjs/common';
import { PutHospitalDto } from './dto/put-hospital.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HospitalService {
  constructor(private prisma: PrismaService) {}

  findAll(
    depth1: string,
    depth2: string,
    size: number,
    page: number,
    sort: string,
  ) {
    let where: any;
    let orderBy: any;

    if (depth1 && depth2) {
      where = {
        dutyAddr1Depth: depth1,
        dutyAddr2Depth: depth2,
      };
    } else if (depth1) {
      where = {
        dutyAddr1Depth: depth1,
      };
    } else {
    }

    if (sort === 'name') {
      orderBy = { name: 'asc' };
    } else if (sort === 'post') {
      orderBy = { posts: { _count: 'desc' } };
    } else {
      orderBy = {}; // 기본적으로 정렬하지 않음
    }

    return this.prisma.hospital.findMany({
      where,
      orderBy,
      skip: size * page,
      take: size,
    });
  }

  findById(id: string) {
    return this.prisma.hospital.findUnique({
      where: { id },
      include: { images: true },
    });
  }

  put(id: string, data: PutHospitalDto) {
    return this.prisma.hospital.update({
      where: { id },
      data,
    });
  }

  remove(id: string) {
    return this.prisma.hospital.delete({
      where: { id },
    });
  }
}
