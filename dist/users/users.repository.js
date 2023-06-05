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
exports.UsersRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let UsersRepository = class UsersRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async existByEmail(email) {
        try {
            const user = await this.prisma.user.findUnique({
                where: {
                    email: email,
                },
            });
            return user;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, 500);
        }
    }
    clientSignUp(data) {
        return this.prisma.user.create({
            data,
        });
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
    deleteUser(id) {
        return this.prisma.user.delete({
            where: { id },
        });
    }
    getUserInfo(id) {
        return this.prisma.user.findMany({
            where: { id: id },
            include: {
                haveKid: {
                    include: { image: true }
                },
                favoriteHospitals: true,
                reserved: true
            },
        });
    }
    updateUserInfo(id, body) {
        return this.prisma.user.update({
            where: { id: id },
            data: body,
        });
    }
    managerSignUp(body) {
        const { hospitalId } = body, rest = __rest(body, ["hospitalId"]);
        return this.prisma.user.create({
            data: Object.assign(Object.assign({}, rest), { hospital: {
                    connect: {
                        id: hospitalId,
                    },
                } }),
        });
    }
};
UsersRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersRepository);
exports.UsersRepository = UsersRepository;
//# sourceMappingURL=users.repository.js.map