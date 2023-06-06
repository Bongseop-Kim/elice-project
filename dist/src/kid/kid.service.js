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
exports.KidService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let KidService = class KidService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async registKid(User) {
        const kid = await this.prisma.kid.create({
            data: {
                parent: {
                    connect: {
                        id: User.id,
                    },
                },
            },
        });
        return kid;
    }
    async getKids(User) {
        const kids = await this.prisma.kid.findMany({
            where: { parentId: User.id },
            include: { image: true }
        });
        return kids;
    }
    async updateKid(id, body, User) {
        await this.prisma.kid.updateMany({
            where: {
                id: Number(id),
                parentId: User.id
            },
            data: body,
        });
        const kidInfo = await this.prisma.kid.findMany({
            where: {
                id: Number(id),
                parentId: User.id
            },
            include: { image: true }
        });
        return kidInfo;
    }
    async deleteKid(id, User) {
        await this.prisma.kid.deleteMany({
            where: {
                id: Number(id),
                parentId: User.id
            },
        });
        const kidInfo = await this.prisma.kid.findMany({
            where: {
                id: Number(id),
                parentId: User.id
            },
            include: { image: true }
        });
        return kidInfo;
    }
};
KidService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], KidService);
exports.KidService = KidService;
//# sourceMappingURL=kid.service.js.map