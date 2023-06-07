"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateHospitalId = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.validateHospitalId = (0, common_1.createParamDecorator)(async (_, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const _a = request.body, { hospitalId } = _a, otherFields = __rest(_a, ["hospitalId"]);
    const hospital = await prisma.hospital.findUnique({
        where: { hospitalId },
    });
    if (!hospital) {
        throw new common_1.NotFoundException('Hospital not found');
    }
    return Object.assign({ hospitalId }, otherFields);
});
//# sourceMappingURL=hospitalExists.decorator.js.map