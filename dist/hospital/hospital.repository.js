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
exports.HospitalRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let HospitalRepository = class HospitalRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAll(depth1, depth2, size, page, sort) {
        let where;
        let orderBy;
        if (depth1 && depth2) {
            where = {
                dutyAddr1Depth: depth1,
                dutyAddr2Depth: depth2,
            };
        }
        else if (depth1) {
            where = {
                dutyAddr1Depth: depth1,
            };
        }
        else {
        }
        if (sort === 'name') {
            orderBy = { name: 'asc' };
        }
        else if (sort === 'post') {
            orderBy = { posts: { _count: 'desc' } };
        }
        else {
            orderBy = {};
        }
        return this.prisma.hospital.findMany({
            where,
            orderBy,
            skip: size * page,
            take: size,
        });
    }
    findById(id) {
        return this.prisma.hospital.findUnique({
            where: { id },
            include: { images: true },
        });
    }
    putById(id, data) {
        return this.prisma.hospital.update({
            where: { id },
            data,
        });
    }
    deleteById(id) {
        return this.prisma.hospital.delete({
            where: { id },
        });
    }
};
HospitalRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], HospitalRepository);
exports.HospitalRepository = HospitalRepository;
//# sourceMappingURL=hospital.repository.js.map