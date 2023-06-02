import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PutHospitalDto } from './dto/put-hospital.dto';

@Injectable()
export class HospitalRepository {
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
    // include를 받지 않으면 기본값은 null이다. (참조하는 데이터가 있더라도)

    return this.prisma.hospital.findUnique({
      where: { id },
      include: { images: true },
    });
  }

  putById(id: string, data: PutHospitalDto) {
    //update는 기존에 것을 지우고 다시 만드는것이 아닌
    //해당하는 값만 변경해준다.

    return this.prisma.hospital.update({
      where: { id },
      data,
    });
  }

  deleteById(id: string) {
    return this.prisma.hospital.delete({
      where: { id },
    });
  }
}
