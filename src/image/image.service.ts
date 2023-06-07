import { Injectable } from '@nestjs/common';
import { UpdateImageDto } from './dto/update-image.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { CreateImageDto } from './dto/create-image.dto';

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

  async upload(
    fileName: string,
    file: Buffer,
    hospitalId: string,
    kidId: number,
  ) {
    await this.s3Client.send(
      new PutObjectCommand({
        Bucket: process.env.S3_UPLOAD_BUCKET,
        Key: Date.now() + fileName,
        Body: file,
      }),
    );
    //fileName을 꼭 key 값에 넣어줘야지 이미지 업로드가 정상적으로 작동하는 이유가 궁굼합니다...

    const data: CreateImageDto = {
      hospitalId,
      kidId,
      imageUrl: `https://devtie.s3.ap-northeast-2.amazonaws.com/${encodeURIComponent(
        Date.now() + fileName,
      )}`,
    };

    return this.prisma.image.create({
      data,
    });
  }

  findByHospitalId(id: string) {
    return this.prisma.image.findMany({
      where: {
        hospitalId: id,
      },
    });
  }

  findByKidId(id: number) {
    return this.prisma.image.findUnique({
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
