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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const prisma_service_1 = require("../prisma/prisma.service");
let UsersService = class UsersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async existByEmail(email) {
        const user = await this.prisma.user.findUnique({
            where: {
                email: email,
            },
        });
        if (user) {
            throw new common_1.UnauthorizedException('해당하는 이메일은 이미 존재합니다.');
        }
        return user;
    }
    async clientSignUp(body) {
        const { email, name, password, phoneNumber } = body;
        await this.existByEmail(email);
        const hashedPassedword = await bcrypt.hash(password, 10);
        const user = {
            email: email,
            name: name,
            phoneNumber: phoneNumber,
            password: hashedPassedword,
            role: 'client',
            address: null,
        };
        const signUp = await this.prisma.user.create({
            data: Object.assign({}, user),
        });
        return signUp.email;
    }
    async deleteUser(id) {
        return await this.prisma.user.delete({
            where: { id },
        });
    }
    async getUserInfo(id) {
        const user = await this.prisma.user.findMany({
            where: { id: id },
            include: {
                haveKid: {
                    include: { image: true },
                },
                favoriteHospitals: true,
                reserved: true,
            },
        });
        return user;
    }
    async updateUserInfo(id, body) {
        if (body.email) {
            throw new common_1.HttpException('이메일은 변경할 수 없습니다.', 400);
        }
        if (body.role) {
            throw new common_1.UnauthorizedException('권한은 임의로 변경할 수 없습니다.');
        }
        if (body.password) {
            const hashedPassedword = await bcrypt.hash(body.password, 10);
            body.password = hashedPassedword;
        }
        const user = await this.prisma.user.update({
            where: { id: id },
            data: body,
        });
        return user;
    }
    async managerSignUp(body) {
        const { email, name, password, phoneNumber, hospitalId } = body;
        await this.existByEmail(email);
        const hashedPassedword = await bcrypt.hash(password, 10);
        const user = {
            email,
            name,
            password: hashedPassedword,
            phoneNumber,
            role: 'manager',
            adminVerified: false,
        };
        const hospitalDuplicateCheck = await this.prisma.user.findUnique({
            where: {
                hospitalId: hospitalId,
            },
        });
        if (hospitalDuplicateCheck) {
            throw new common_1.UnauthorizedException('해당 병원은 이미 등록된 관리자가 존재합니다.');
        }
        const signUp = await this.prisma.user.create({
            data: Object.assign(Object.assign({}, user), { hospital: {
                    connect: {
                        id: hospitalId,
                    },
                } }),
        });
        return signUp.email;
    }
    findUserByEmail(email) {
        return this.prisma.user.findUnique({
            where: {
                email: email,
            },
        });
    }
    findUserByIdWithoutPassword(id) {
        return this.prisma.user.findUnique({
            where: {
                id: id,
            },
        });
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map