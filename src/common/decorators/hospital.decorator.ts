import {
  createParamDecorator,
  ExecutionContext,
  NotFoundException,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const CurrentHospital = createParamDecorator(
  (_, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const { hospitalId, ...rest } = request.body;
    const paramId = request.params.hospitalId;

    const checkHopital = async (id: string) => {
      const hospital = await prisma.hospital.findUnique({
        where: { id },
      });
      if (!hospital) {
        throw new NotFoundException(
          '일치하는 병원이 없습니다. hospitalId를 확인해주세요.',
        );
      }
    };

    if (paramId) {
      checkHopital(paramId);
      return paramId;
    } else if (hospitalId) {
      checkHopital(hospitalId);
      return { hospitalId, ...rest };
    }
  },
);
