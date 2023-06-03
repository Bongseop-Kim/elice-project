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
exports.OpenApiInfoDto = exports.OpenApiGPSDto = exports.OpenApiAddrDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class OpenApiAddrDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '서울특별시',
        description: 'Q0'
    }),
    __metadata("design:type", String)
], OpenApiAddrDto.prototype, "Q0", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '종로구',
        description: 'Q1'
    }),
    __metadata("design:type", String)
], OpenApiAddrDto.prototype, "Q1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '세브란스',
        description: 'QN'
    }),
    __metadata("design:type", String)
], OpenApiAddrDto.prototype, "QN", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1',
        description: 'pageNo'
    }),
    __metadata("design:type", String)
], OpenApiAddrDto.prototype, "pageNo", void 0);
exports.OpenApiAddrDto = OpenApiAddrDto;
class OpenApiGPSDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '127.000',
        description: 'WGS84_LON',
        required: true
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], OpenApiGPSDto.prototype, "WGS84_LON", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '127.000',
        description: 'WGS84_LAT',
        required: true
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], OpenApiGPSDto.prototype, "WGS84_LAT", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '10',
        description: 'numOfRows'
    }),
    __metadata("design:type", String)
], OpenApiGPSDto.prototype, "numOfRows", void 0);
exports.OpenApiGPSDto = OpenApiGPSDto;
class OpenApiInfoDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'A0000028',
        description: 'hpid',
        required: true
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], OpenApiInfoDto.prototype, "hpid", void 0);
exports.OpenApiInfoDto = OpenApiInfoDto;
//# sourceMappingURL=openAPI.request.dto.js.map