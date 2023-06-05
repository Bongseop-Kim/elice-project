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
exports.KidController = void 0;
const common_1 = require("@nestjs/common");
const jwt_guard_1 = require("../auth/jwt/jwt.guard");
const kid_service_1 = require("./kid.service");
const user_decorator_1 = require("../common/decorators/user.decorator");
const swagger_1 = require("@nestjs/swagger");
const kid_dtos_1 = require("./dto/kid.dtos");
const success_interceptor_1 = require("../common/interceptor/success.interceptor");
let KidController = class KidController {
    constructor(kidService) {
        this.kidService = kidService;
    }
    registKid(User) {
        return this.kidService.registKid(User);
    }
    getKids(User) {
        return this.kidService.getKids(User);
    }
    updateKid(id, body, User) {
        return this.kidService.updateKid(id, body);
    }
    deleteKid(id, User) {
        return this.kidService.deleteKid(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '아이 등록하기' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBody)({
        description: 'post registKid',
        type: kid_dtos_1.RegistKidDto,
    }),
    (0, common_1.Post)('regist'),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], KidController.prototype, "registKid", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '아이들 조회하기' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBody)({
        description: 'get kids',
        type: kid_dtos_1.GetKidsDto,
    }),
    (0, common_1.Get)('get'),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], KidController.prototype, "getKids", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '아이 정보 수정하기' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBody)({
        description: 'update kid',
        type: kid_dtos_1.UpdateKidDto,
    }),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, kid_dtos_1.UpdateKidDto, Object]),
    __metadata("design:returntype", void 0)
], KidController.prototype, "updateKid", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '아이 정보 삭제하기' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBody)({
        description: 'delete kid',
    }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], KidController.prototype, "deleteKid", null);
KidController = __decorate([
    (0, common_1.Controller)('kid'),
    (0, swagger_1.ApiTags)('Kid'),
    (0, common_1.UseInterceptors)(success_interceptor_1.SuccessInterceptor),
    __metadata("design:paramtypes", [kid_service_1.KidService])
], KidController);
exports.KidController = KidController;
//# sourceMappingURL=kid.controller.js.map