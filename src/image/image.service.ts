import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { v4 as uuid } from 'uuid';
import {
  CreateHospitalImageDto,
  CreateKidImageDto,
} from './dto/create-image.dto';

@Injectable()
export class ImageService {
  constructor(private prisma: PrismaService) {}
  private readonly s3Client = new S3Client({
    region: process.env.S3_UPLOAD_REGION,
    credentials: {
      accessKeyId: process.env.S3_UPLOAD_KEY,
      secretAccessKey: process.env.S3_UPLOAD_SECRET,
    },
  });

  async upload(file: Buffer, hospitalId: string, kidId: number) {
    const fileKey = uuid() + '.jpg';
    await this.s3Client.send(
      new PutObjectCommand({
        Bucket: process.env.S3_UPLOAD_BUCKET,
        Key: fileKey,
        Body: file,
      }),
    );
    //key 값의 파일의 값이 jpg인지 png인지 jpeg인지 꼭 알려줘야한다.

    if (hospitalId) {
      const data: CreateHospitalImageDto = {
        hospitalId,
        imageUrl: `https://devtie.s3.ap-northeast-2.amazonaws.com/${fileKey}`,
      };
      return await this.prisma.image.create({
        data,
      });
    } else if (kidId) {
      const data: CreateKidImageDto = {
        kidId,
        imageUrl: `https://devtie.s3.ap-northeast-2.amazonaws.com/${fileKey}`,
      };
      return await this.prisma.image.create({
        data,
      });
    }
  }

  findByHospitalId(id: string) {
    return this.prisma.image.findMany({
      where: {
        hospitalId: id,
      },
    });
  }

  findByKidId(id: number) {
    return this.prisma.image.findMany({
      where: {
        kidId: id,
      },
    });
  }

  remove(id: number) {
    return this.prisma.image.delete({
      where: { id },
    });
  }
}
