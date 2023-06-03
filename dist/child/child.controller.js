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
exports.ChildController = void 0;
const common_1 = require("@nestjs/common");
const jwt_guard_1 = require("../auth/jwt/jwt.guard");
const child_service_1 = require("./child.service");
const user_decorator_1 = require("../common/decorators/user.decorator");
const swagger_1 = require("@nestjs/swagger");
const child_dtos_1 = require("./dto/child.dtos");
const success_interceptor_1 = require("../common/interceptor/success.interceptor");
let ChildController = class ChildController {
    constructor(childService) {
        this.childService = childService;
    }
    registChild(body, User) {
        return this.childService.registChild(body, User);
    }
    updateChild(id, body, User) {
        return this.childService.updateChild(id, body);
    }
    deleteChild(id, User) {
        return this.childService.deleteChild(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '아이 등록하기' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBody)({
        description: 'post registChild',
        type: child_dtos_1.RegistChildDto,
    }),
    (0, common_1.Post)('regist'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [child_dtos_1.RegistChildDto, Object]),
    __metadata("design:returntype", void 0)
], ChildController.prototype, "registChild", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '아이 정보 수정하기' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBody)({
        description: 'update child',
        type: child_dtos_1.UpdateChildDto,
    }),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, child_dtos_1.UpdateChildDto, Object]),
    __metadata("design:returntype", void 0)
], ChildController.prototype, "updateChild", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '아이 정보 삭제하기' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBody)({
        description: 'delete child',
    }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], ChildController.prototype, "deleteChild", null);
ChildController = __decorate([
    (0, common_1.Controller)('child'),
    (0, swagger_1.ApiTags)('Child'),
    (0, common_1.UseInterceptors)(success_interceptor_1.SuccessInterceptor),
    __metadata("design:paramtypes", [child_service_1.ChildService])
], ChildController);
exports.ChildController = ChildController;
//# sourceMappingURL=child.controller.js.map