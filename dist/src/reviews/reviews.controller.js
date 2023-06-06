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
exports.ReviewsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_service_1 = require("../auth/auth.service");
const jwt_guard_1 = require("../auth/jwt/jwt.guard");
const user_decorator_1 = require("../common/decorators/user.decorator");
const success_interceptor_1 = require("../common/interceptor/success.interceptor");
const reviews_dto_1 = require("./dto/reviews.dto");
const reviews_service_1 = require("./reviews.service");
let ReviewsController = class ReviewsController {
    constructor(reviewsService, authService) {
        this.reviewsService = reviewsService;
        this.authService = authService;
    }
    async newVote(param, body, User) {
        return await this.reviewsService.newVote(param, body, User);
    }
    async checkReviews(param) {
        return await this.reviewsService.checkReviews(param);
    }
    async isUserReviewed(param, User) {
        return await this.reviewsService.isUserReviewed(param, User);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '리뷰 등록, 수정 및 취소하기' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBody)({
        description: 'post new review',
    }),
    (0, common_1.Post)(':hospitalId'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reviews_dto_1.VoteTag, reviews_dto_1.VoteTag, Object]),
    __metadata("design:returntype", Promise)
], ReviewsController.prototype, "newVote", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '병원에 등록된 리뷰들 확인하기' }),
    (0, swagger_1.ApiBody)({
        description: 'show hospital reviews'
    }),
    (0, common_1.Get)(':hospitalId'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reviews_dto_1.VoteTag]),
    __metadata("design:returntype", Promise)
], ReviewsController.prototype, "checkReviews", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '로그인 유저 리뷰 확인하기' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBody)({
        description: 'user review check'
    }),
    (0, common_1.Get)('user/:hospitalId'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reviews_dto_1.VoteTag, Object]),
    __metadata("design:returntype", Promise)
], ReviewsController.prototype, "isUserReviewed", null);
ReviewsController = __decorate([
    (0, common_1.Controller)('reviews'),
    (0, swagger_1.ApiTags)('Reviews'),
    (0, common_1.UseInterceptors)(success_interceptor_1.SuccessInterceptor),
    __metadata("design:paramtypes", [reviews_service_1.ReviewsService,
        auth_service_1.AuthService])
], ReviewsController);
exports.ReviewsController = ReviewsController;
//# sourceMappingURL=reviews.controller.js.map