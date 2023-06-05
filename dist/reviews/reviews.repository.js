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
exports.ReviewsRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ReviewsRepository = class ReviewsRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async newVote(param, body, User) {
        const { hospitalId } = param;
        const { vote } = body;
        const check = await this.prisma.reviews.findMany({
            where: {
                posterId: User.id,
                hospitalId: hospitalId
            }
        });
        if (check.length === 0) {
            await this.prisma.reviews.create({
                data: {
                    posterId: User.id,
                    hospitalId: hospitalId,
                    vote: vote
                }
            });
        }
        else if (check.length !== 0 && check[0].vote === vote) {
            await this.prisma.reviews.delete({
                where: { id: check[0].id }
            });
        }
        else if (check.length !== 0 && check[0].vote !== vote) {
            await this.prisma.reviews.update({
                where: { id: check[0].id },
                data: {
                    vote: vote
                }
            });
        }
        const isCheckChanged = await this.prisma.reviews.findMany({
            where: {
                posterId: User.id,
                hospitalId: hospitalId
            }
        });
        return isCheckChanged;
    }
    async checkReviews(param) {
        const { hospitalId } = param;
        let result = [];
        for (let i = 0; i < 6; i++) {
            const reviews = await this.prisma.reviews.findMany({
                where: {
                    hospitalId: hospitalId,
                    vote: (i + 1)
                }
            });
            result.push(reviews.length);
        }
        return result;
    }
    async isUserReviewed(param, User) {
        const { hospitalId } = param;
        const check = await this.prisma.reviews.findMany({
            where: {
                posterId: User.id,
                hospitalId: hospitalId
            }
        });
        return check;
    }
};
ReviewsRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ReviewsRepository);
exports.ReviewsRepository = ReviewsRepository;
//# sourceMappingURL=reviews.repository.js.map