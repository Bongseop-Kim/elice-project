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
exports.OpenApiController = void 0;
const common_1 = require("@nestjs/common");
const openApi_repository_1 = require("./openApi.repository");
const openAPI_request_dto_1 = require("./dto/openAPI.request.dto");
let OpenApiController = class OpenApiController {
    constructor(apiRepository) {
        this.apiRepository = apiRepository;
    }
    async getAddrData(body) {
        return await this.apiRepository.addrFetchData(body);
    }
    async getGPSData(body) {
        return await this.apiRepository.gpsFetchData(body);
    }
    async getInfoData(param) {
        return await this.apiRepository.infoFetchData(param);
    }
};
__decorate([
    (0, common_1.Get)('hosAddr'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [openAPI_request_dto_1.OpenApiAddrDto]),
    __metadata("design:returntype", Promise)
], OpenApiController.prototype, "getAddrData", null);
__decorate([
    (0, common_1.Get)('hosNearBy'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [openAPI_request_dto_1.OpenApiGPSDto]),
    __metadata("design:returntype", Promise)
], OpenApiController.prototype, "getGPSData", null);
__decorate([
    (0, common_1.Get)('hpid/:hpid'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [openAPI_request_dto_1.OpenApiInfoDto]),
    __metadata("design:returntype", Promise)
], OpenApiController.prototype, "getInfoData", null);
OpenApiController = __decorate([
    (0, common_1.Controller)('api'),
    __metadata("design:paramtypes", [openApi_repository_1.OpenApiRepository])
], OpenApiController);
exports.OpenApiController = OpenApiController;
//# sourceMappingURL=openApi.controller.js.map