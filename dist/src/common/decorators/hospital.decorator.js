"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentHospital = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.CurrentHospital = (0, common_1.createParamDecorator)(async (_, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const id = request.params.hospitalId;
    const hospital = await prisma.hospital.findUnique({
        where: { id },
    });
    if (!hospital) {
        throw new common_1.NotFoundException('일치하는 병원이 없습니다. hospitalId를 확인해주세요.');
    }
    return id;
});
//# sourceMappingURL=hospital.decorator.js.map