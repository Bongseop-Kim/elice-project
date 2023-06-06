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
exports.ImageService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_s3_1 = require("@aws-sdk/client-s3");
let ImageService = class ImageService {
    constructor(prisma) {
        this.prisma = prisma;
        this.s3Client = new client_s3_1.S3Client({
            region: process.env.S3_UPLOAD_REGION,
            credentials: {
                accessKeyId: process.env.S3_UPLOAD_KEY,
                secretAccessKey: process.env.S3_UPLOAD_SECRET,
            },
        });
    }
    async upload(fileName, file, hospitalId, kidId) {
        await this.s3Client.send(new client_s3_1.PutObjectCommand({
            Bucket: process.env.S3_UPLOAD_BUCKET,
            Key: Date.now() + fileName,
            Body: file,
        }));
        const data = {
            hospitalId,
            kidId,
            imageUrl: `https://devtie.s3.ap-northeast-2.amazonaws.com/${encodeURIComponent(Date.now() + fileName)}`,
        };
        return this.prisma.image.create({
            data,
        });
    }
    findByHospitalId(id) {
        return this.prisma.image.findMany({
            where: {
                hospitalId: id,
            },
        });
    }
    findByKidId(id) {
        return this.prisma.image.findUnique({
            where: {
                kidId: id,
            },
        });
    }
    update(id, data) {
        return this.prisma.image.update({
            where: { id },
            data,
        });
    }
    remove(id) {
        return this.prisma.image.delete({
            where: { id },
        });
    }
};
ImageService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ImageService);
exports.ImageService = ImageService;
//# sourceMappingURL=image.service.js.map