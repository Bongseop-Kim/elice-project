"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ReservationService = class ReservationService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(data, userId) {
        const { hospitalId, memo } = data;
        return this.prisma.reservation.create({
            data: {
                hospitalId,
                memo,
                userId,
            },
        });
    }
    findOne(id) {
        return this.prisma.reservation.findUnique({
            where: {
                id,
            },
        });
    }
    findByUser(userId) {
        return this.prisma.reservation.findMany({
            where: { userId },
        });
    }
    findByHospital(hospitalId) {
        return this.prisma.reservation.findMany({
            where: { hospitalId },
        });
    }
    update(id, data) {
        return this.prisma.reservation.update({
            where: { id },
            data,
        });
    }
    remove(id) {
        return this.prisma.reservation.delete({
            where: { id },
        });
    }
};
ReservationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ReservationService);
exports.ReservationService = ReservationService;
//# sourceMappingURL=reservation.service.js.map