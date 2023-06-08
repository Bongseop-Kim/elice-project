import {
  createParamDecorator,
  ExecutionContext,
  NotFoundException,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// ...나의 데코레이터 안녕...
// 해당 작업은 hospital 서비스 내에서 작업하는 것이 책임 단위 분리에 적합하다.
// 데코레이터는 전역으로 사용하는 것이기 때문에
// 유저정보 처럼 전체 API에서 사용되는 것에 사용하는 것이 좋다.

export const CurrentHospital = createParamDecorator(
  (_, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const { hospitalId, ...rest } = request.body;
    const paramId = request.params.hospitalId;

    const checkHopital = (id: string) => {
      const hospital = prisma.hospital.findUnique({
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
