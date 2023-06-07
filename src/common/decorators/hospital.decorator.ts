import {
  createParamDecorator,
  ExecutionContext,
  NotFoundException,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const CurrentHospital = createParamDecorator(
  async (_, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const id = request.params.hospitalId;

    // console.log(request.body);
    // console.log(request.params);
    const hospital = await prisma.hospital.findUnique({
      where: { id },
    });

    if (!hospital) {
      throw new NotFoundException(
        '일치하는 병원이 없습니다. hospitalId를 확인해주세요.',
      );
    }

    return id;
  },
);
