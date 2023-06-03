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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const auth_service_1 = require("../auth/auth.service");
const swagger_1 = require("@nestjs/swagger");
const jwt_guard_1 = require("../auth/jwt/jwt.guard");
const user_decorator_1 = require("../common/decorators/user.decorator");
const users_dtos_1 = require("./dto/users.dtos");
const request_login_dto_1 = require("../auth/dto/request.login.dto");
const success_interceptor_1 = require("../common/interceptor/success.interceptor");
let UsersController = class UsersController {
    constructor(usersService, authService) {
        this.usersService = usersService;
        this.authService = authService;
    }
    getCurrentUser(User) {
        return User;
    }
    async clientSignUp(body) {
        return await this.usersService.clientSignUp(body);
    }
    async deleteUser(user) {
        return await this.usersService.deleteUser(user.id);
    }
    async logIn(data) {
        return await this.authService.jwtLogIn(data);
    }
    getUserInfo(User) {
        return this.usersService.getUserInfo(User.id);
    }
    updateUserInfo(body, User) {
        return this.usersService.updateUserInfo(User.id, body);
    }
    async managerSignUp(body) {
        return await this.usersService.managerSignUp(body);
    }
    async verifyCheck(id, User) {
        return await this.usersService.verifyCheck(id, User);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '현재 user 가져오기' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getCurrentUser", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '회원가입' }),
    (0, swagger_1.ApiBody)({
        description: 'post signup',
        type: users_dtos_1.CreateUserDto,
    }),
    (0, common_1.Post)('clientsignup'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_dtos_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "clientSignUp", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '회원 탈퇴' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBody)({
        description: 'user delete',
    }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(''),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteUser", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '유저 로그인' }),
    (0, swagger_1.ApiBody)({
        description: 'post login',
        type: request_login_dto_1.RequestLoginDto,
    }),
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_login_dto_1.RequestLoginDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "logIn", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '유저 정보 조회' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBody)({
        description: 'get userInfo',
    }),
    (0, common_1.Get)('get'),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getUserInfo", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '유저 정보 수정' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBody)({
        description: 'update userInfo',
    }),
    (0, common_1.Patch)(''),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_dtos_1.UpdateUserDto, Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "updateUserInfo", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '병원 관계자 회원가입' }),
    (0, swagger_1.ApiBody)({
        description: 'post signup',
        type: users_dtos_1.CreateManagerDto,
    }),
    (0, common_1.Post)('managersignup'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_dtos_1.CreateManagerDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "managerSignUp", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '유저 등급 분류' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBody)({
        description: 'verify check',
    }),
    (0, common_1.Get)('/check/:id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "verifyCheck", null);
UsersController = __decorate([
    (0, common_1.Controller)('user'),
    (0, swagger_1.ApiTags)('User'),
    (0, common_1.UseInterceptors)(success_interceptor_1.SuccessInterceptor),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        auth_service_1.AuthService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map