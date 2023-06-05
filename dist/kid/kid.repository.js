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
exports.KidRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let KidRepository = class KidRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    registKid(User) {
        const { parentId } = User;
        const kid = this.prisma.kid.create({
            data: {
                parent: {
                    connect: {
                        id: parentId,
                    },
                },
            },
        });
        return kid;
    }
    getKids(User) {
        return this.prisma.kid.findMany({
            where: { parentId: User.id },
            include: { image: true }
        });
    }
    updateKid(id, body) {
        return this.prisma.kid.update({
            where: { id: Number(id) },
            data: body,
        });
    }
    deleteKid(id) {
        return this.prisma.kid.delete({
            where: { id: Number(id) },
        });
    }
};
KidRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], KidRepository);
exports.KidRepository = KidRepository;
//# sourceMappingURL=kid.repository.js.map