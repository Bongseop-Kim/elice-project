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
exports.AdminRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AdminRepository = class AdminRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAllUserInfo(userType) {
        const modifyParam = Object.values(userType).join();
        if (modifyParam === 'generelclient') {
            const client = await this.prisma.user.findMany({
                where: {
                    role: 'client',
                }
            });
            return client;
        }
        else if (modifyParam === 'hospitalclient') {
            const manager = await this.prisma.user.findMany({
                where: {
                    role: 'manager',
                    adminVerified: true
                }
            });
            return manager;
        }
        else if (modifyParam === 'notverifiedhospitalclient') {
            const unVerifiedManager = await this.prisma.user.findMany({
                where: {
                    role: 'manager',
                    adminVerified: false
                }
            });
            return unVerifiedManager;
        }
        else
            return new common_1.HttpException('요청 경로를 잘못 지정하였습니다.', 404);
    }
    async adminDeleteUser(id) {
        const modifyId = Number(Object.values(id));
        const willBeDeletedUser = await this.prisma.user.delete({
            where: { id: modifyId }
        });
        return willBeDeletedUser;
    }
    async adminVerifyManager(id) {
        const modifyId = Number(Object.values(id));
        const verifyManager = await this.prisma.user.update({
            where: { id: modifyId },
            data: { adminVerified: true }
        });
        return verifyManager;
    }
};
AdminRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AdminRepository);
exports.AdminRepository = AdminRepository;
//# sourceMappingURL=admin.repository.js.map