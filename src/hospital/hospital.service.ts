import { Injectable } from '@nestjs/common';
import { PutHospitalDto } from './dto/put-hospital.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateHospitalDto } from './dto/create-hospital.dto';

@Injectable()
export class HospitalService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateHospitalDto) {
    const id = 'new' + new Date().getTime().toString();
    return await this.prisma.hospital.create({
      data: {
        ...data,
        id,
        wgs84Lat: parseFloat(data.wgs84Lat),
        wgs84Lon: parseFloat(data.wgs84Lon),
      },
    });
  }

  findEverything() {
    return this.prisma.hospital.findMany();
  }

  findByName(hospitalName: string) {
    return this.prisma.hospital.findMany({
      where: {
        dutyName: {
          contains: hospitalName,
        },
      },
      take: 10,
    });
  }

  //평균 응답 시간 0.08초 8배
  async findByNames(hospitalName: string) {
    const query = `%${hospitalName}%`;
    return await this.prisma.$queryRaw`
      SELECT *
      FROM Hospital
      WHERE dutyName LIKE ${query};
    `;
  }

  findByNameTen(size: number, page: number, hospitalName: string) {
    return this.prisma.hospital.findMany({
      where: {
        dutyName: { contains: hospitalName },
      },
      skip: size * (page - 1),
      take: size,
    });
  }

  findAll(
    depth1: string,
    depth2: string,
    size: number,
    page: number,
    sort: string,
    dutyName: string,
  ) {
    let where: Record<string, string | Record<string, string>> = {};
    let orderBy: Record<string, string | Record<string, string>> = {};

    if (depth1 || depth2 || dutyName) {
      if (depth1) {
        where.dutyAddr1Depth = depth1;
      }

      if (depth2) {
        where.dutyAddr2Depth = depth2;
      }

      if (dutyName) {
        where.dutyName = {
          contains: dutyName,
        };
      }
    }

    if (sort === 'name') {
      orderBy.dutyName = 'asc';
    } else if (sort === 'review') {
      orderBy.reviews = { _count: 'desc' };
    }

    return this.prisma.hospital.findMany({
      where,
      orderBy,
      skip: size * (page - 1),
      take: size,
      include: { reviews: true },
    });
  }

  //아래 쿼리문은 이미지가 없으면 [null]이 반환된다....
  //null은 값이 아닌데 배열안에 담기는게 정상인가...?
  async before(userLat: number, userLon: number) {
    return await this.prisma.$queryRaw`
    SELECT 
        H.id,
        (6371 * acos(cos(radians(${userLat})) * cos(radians(wgs84Lat)) * cos(radians(wgs84Lon) - radians(${userLon})) + sin(radians(${userLat})) * sin(radians(wgs84Lat))))
        AS distance,
        H.dutyName,
        H.dutyAddr,
        JSON_ARRAYAGG(I.imageUrl) AS images
    FROM 
        Hospital H
    LEFT JOIN 
        Image I
    ON H.id = I.hospitalId
    GROUP BY
        H.id,
        distance,
        dutyName,
        dutyAddr
    ORDER BY 
        distance
    LIMIT 9
`;
  }
  //또한 위의 쿼리문은 모든 병원의 좌표와 사용자의 좌표를 비교하여 거리 레코드를 만들기 때문에
  //비효율적이다 이를 개선한 것이 아래의 쿼리문이다.

  async findByDistance(userLat: number, userLon: number, r: number) {
    const query = await this.prisma.$queryRaw<{ id: string }[]>`
  SELECT id,ST_Distance_Sphere(
    POINT(wgs84Lon, wgs84Lat),
    POINT(${userLon}, ${userLat})
  ) AS dist
  FROM Hospital
  WHERE ST_Distance_Sphere(
    POINT(wgs84Lon, wgs84Lat),
    POINT(${userLon}, ${userLat})
  ) <= ${r} * 1000
  ORDER BY dist
  LIMIT 9;
`; //반경 5km의 병원을 찾습니다.

    //프리즈마의 작동 방식
    //query를 orderby 해서 보내줘도 prisma쿼리문에서 정렬하지 않으면 기본적으로 id로 정렬된다.
    return await this.prisma.hospital.findMany({
      where: {
        id: {
          in: query.map(({ id }) => id),
        },
      },
      select: {
        id: true,
        dutyName: true,
        dutyAddr: true,
        image: { select: { imageUrl: true } },
      },
    });
  }

  findById(id: string) {
    return this.prisma.hospital.findUnique({
      where: { id },
      include: { image: true },
    });
  }

  put(id: string, data: PutHospitalDto) {
    return this.prisma.hospital.update({
      where: { id },
      data: {
        ...data,
        wgs84Lat: parseFloat(data.wgs84Lat),
        wgs84Lon: parseFloat(data.wgs84Lon),
      },
    });
  }

  remove(id: string) {
    return this.prisma.hospital.delete({
      where: { id },
    });
  }
}
