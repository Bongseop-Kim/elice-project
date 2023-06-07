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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageController = void 0;
const common_1 = require("@nestjs/common");
const image_service_1 = require("./image.service");
const swagger_1 = require("@nestjs/swagger");
const success_interceptor_1 = require("../common/interceptor/success.interceptor");
const image_entity_1 = require("./entities/image.entity");
const platform_express_1 = require("@nestjs/platform-express");
const http_exception_filter_1 = require("../common/exception/http-exception.filter");
const input_image_dto_1 = require("./dto/input-image.dto");
let ImageController = class ImageController {
    constructor(imageService) {
        this.imageService = imageService;
    }
    upload(file, data) {
        return this.imageService.upload(file.originalname, file.buffer, data.hospitalId, +data.kidId);
    }
    findByHospitalId(id) {
        return this.imageService.findByHospitalId(id);
    }
    findByKidId(id) {
        return this.imageService.findByKidId(+id);
    }
    remove(id) {
        return this.imageService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: '이미지 업로드' }),
    (0, swagger_1.ApiResponse)({ type: image_entity_1.ImageEntity }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)(new common_1.ParseFilePipe({
        validators: [new common_1.FileTypeValidator({ fileType: 'image/jpeg' })],
    }))),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, input_image_dto_1.InputImageDto]),
    __metadata("design:returntype", void 0)
], ImageController.prototype, "upload", null);
__decorate([
    (0, common_1.Get)('hospital/:id'),
    (0, swagger_1.ApiOperation)({ summary: '병원의 모든 이미지' }),
    (0, swagger_1.ApiResponse)({ type: [image_entity_1.ImageEntity] }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ImageController.prototype, "findByHospitalId", null);
__decorate([
    (0, common_1.Get)('kid/:id'),
    (0, swagger_1.ApiOperation)({ summary: '아이 이미지 하나' }),
    (0, swagger_1.ApiResponse)({ type: image_entity_1.ImageEntity }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ImageController.prototype, "findByKidId", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: '이미지 삭제하기' }),
    (0, swagger_1.ApiResponse)({ type: image_entity_1.ImageEntity }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ImageController.prototype, "remove", null);
ImageController = __decorate([
    (0, common_1.Controller)('image'),
    (0, swagger_1.ApiTags)('Image'),
    (0, common_1.UseInterceptors)(success_interceptor_1.SuccessInterceptor),
    (0, common_1.UseFilters)(http_exception_filter_1.HttpExceptionFilter),
    __metadata("design:paramtypes", [image_service_1.ImageService])
], ImageController);
exports.ImageController = ImageController;
//# sourceMappingURL=image.controller.js.map