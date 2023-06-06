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
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AdminService = class AdminService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    isAdmin(User) {
        if (User.role !== 'admin') {
            throw new common_1.UnauthorizedException('접근 권한이 없습니다.');
        }
        return true;
    }
    async getAllUserInfo(param, User) {
        this.isAdmin(User);
        const { userType } = param;
        if (userType === 'generelclient') {
            const client = await this.prisma.user.findMany({
                where: {
                    role: 'client',
                },
                select: {
                    id: true,
                    email: true,
                    name: true,
                    phoneNumber: true,
                    createdAt: true
                }
            });
            return client;
        }
        else if (userType === 'hospitalclient') {
            const manager = await this.prisma.user.findMany({
                where: {
                    role: 'manager',
                    adminVerified: true
                },
                select: {
                    id: true,
                    email: true,
                    name: true,
                    phoneNumber: true,
                    createdAt: true,
                    hospitalId: true
                }
            });
            return manager;
        }
        else if (userType === 'notverifiedhospitalclient') {
            const unVerifiedManager = await this.prisma.user.findMany({
                where: {
                    role: 'manager',
                    adminVerified: false
                },
                select: {
                    id: true,
                    email: true,
                    name: true,
                    phoneNumber: true,
                    createdAt: true,
                    hospitalId: true
                }
            });
            return unVerifiedManager;
        }
        else
            return new common_1.HttpException('요청 경로를 잘못 지정하였습니다.', 404);
    }
    async adminDeleteUser(param, User) {
        this.isAdmin(User);
        const { userId } = param;
        const willBeDeletedUser = await this.prisma.user.delete({
            where: { id: Number(userId) }
        });
        return willBeDeletedUser;
    }
    async adminVerifyManager(param, User) {
        this.isAdmin(User);
        const { userId } = param;
        await this.prisma.user.update({
            where: { id: Number(userId) },
            data: { adminVerified: true }
        });
        const user = await this.prisma.user.findUnique({
            where: { id: Number(userId) },
            select: {
                id: true,
                adminVerified: true
            }
        });
        return user;
    }
};
AdminService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AdminService);
exports.AdminService = AdminService;
//# sourceMappingURL=admin.service.js.map