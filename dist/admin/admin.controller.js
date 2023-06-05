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
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("../auth/auth.service");
const swagger_1 = require("@nestjs/swagger");
const jwt_guard_1 = require("../auth/jwt/jwt.guard");
const user_decorator_1 = require("../common/decorators/user.decorator");
const success_interceptor_1 = require("../common/interceptor/success.interceptor");
const admin_service_1 = require("./admin.service");
const admin_dtos_1 = require("./dto/admin.dtos");
let AdminController = class AdminController {
    constructor(adminService, authService) {
        this.adminService = adminService;
        this.authService = authService;
    }
    getUserInfo(param, User) {
        return this.adminService.getAllUserInfo(param, User);
    }
    adminDeleteUser(param, User) {
        return this.adminService.adminDeleteUser(param, User);
    }
    adminVerifyManager(param, User) {
        return this.adminService.adminVerifyManager(param, User);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '타입별 유저 정보 조회' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBody)({
        description: 'get userInfo'
    }),
    (0, common_1.Get)('get/:userType'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_dtos_1.UserType, Object]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "getUserInfo", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '특정 유저 탈퇴' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBody)({
        description: 'delete user'
    }),
    (0, common_1.Delete)('delete/:userId'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_dtos_1.Id, Object]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "adminDeleteUser", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '병원 관리자 권한 승인' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBody)({
        description: 'verify hospital client'
    }),
    (0, common_1.Patch)('verify/:userId'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_dtos_1.Id, Object]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "adminVerifyManager", null);
AdminController = __decorate([
    (0, common_1.Controller)('admin'),
    (0, swagger_1.ApiTags)('Admin'),
    (0, common_1.UseInterceptors)(success_interceptor_1.SuccessInterceptor),
    __metadata("design:paramtypes", [admin_service_1.AdminService,
        auth_service_1.AuthService])
], AdminController);
exports.AdminController = AdminController;
//# sourceMappingURL=admin.controller.js.map